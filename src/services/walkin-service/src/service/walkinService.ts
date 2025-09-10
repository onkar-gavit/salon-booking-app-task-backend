import { PutCommand, QueryCommand, QueryCommandOutput } from '@aws-sdk/lib-dynamodb';
import { docClient, WALKINS_TABLE, BOOKINGS_TABLE } from '../utils/dynamodb';
import { PrismaClient } from '../../../../../libs/generated/client';
import { Walkin, WalkinStatus, CreateWalkinRequest, CreateWalkinResponse } from '../models/walkin.models';
import { ValidationError, NotFoundError } from '../utils/errors';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export class WalkinService {
  async createWalkin(request: CreateWalkinRequest, businessId: string): Promise<CreateWalkinResponse> {
    // Validate that the service, customer, and location exist and belong to the business
    await this.validateWalkinRequest(request, businessId);

    // Get service duration for wait time calculation
    const service = await prisma.service.findFirst({
      where: {
        id: request.serviceId,
        businessId: businessId,
        isActive: true
      }
    });

    if (!service) {
      throw new NotFoundError('Service');
    }

    // Calculate estimated wait time
    const estimatedWaitTime = await this.calculateEstimatedWaitTime(request.locationId);

    // Create walkin record
    const walkin: Walkin = {
      id: uuidv4(),
      locationId: request.locationId,
      customerId: request.customerId,
      serviceId: request.serviceId,
      businessId: businessId,
      requestedTime: new Date().toISOString(),
      estimatedWaitTime: estimatedWaitTime,
      status: WalkinStatus.REQUESTED,
      notes: request.notes,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Save to DynamoDB
    await docClient.send(new PutCommand({
      TableName: WALKINS_TABLE,
      Item: walkin
    }));

    return {
      walkin,
      estimatedWaitTime
    };
  }

  private async validateWalkinRequest(request: CreateWalkinRequest, businessId: string): Promise<void> {
    // Validate customer exists and belongs to business
    const customer = await prisma.customer.findFirst({
      where: {
        id: request.customerId,
        businessId: businessId
      }
    });

    if (!customer) {
      throw new NotFoundError('Customer');
    }

    // Validate location exists and belongs to business
    const location = await prisma.location.findFirst({
      where: {
        id: request.locationId,
        businessId: businessId,
        isActive: true
      }
    });

    if (!location) {
      throw new NotFoundError('Location');
    }

    // Validate service exists and belongs to business
    const service = await prisma.service.findFirst({
      where: {
        id: request.serviceId,
        businessId: businessId,
        isActive: true
      }
    });

    if (!service) {
      throw new NotFoundError('Service');
    }
  }

  private async calculateEstimatedWaitTime(locationId: string): Promise<number> {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString();
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).toISOString();

    // Get all pending bookings for today at this location
    const pendingBookings = await docClient.send(new QueryCommand({
      TableName: BOOKINGS_TABLE,
      IndexName: 'LocationTimeIndex',
      KeyConditionExpression: 'locationId = :locationId AND startTime BETWEEN :startOfDay AND :endOfDay',
      FilterExpression: '#status IN (:requested, :confirmed)',
      ExpressionAttributeNames: {
        '#status': 'status'
      },
      ExpressionAttributeValues: {
        ':locationId': locationId,
        ':startOfDay': startOfDay,
        ':endOfDay': endOfDay,
        ':requested': 'REQUESTED',
        ':confirmed': 'CONFIRMED'
      }
    })) as any;

    // Get all pending walk-ins for today at this location
    const pendingWalkins: QueryCommandOutput = await docClient.send(new QueryCommand({
      TableName: WALKINS_TABLE,
      IndexName: 'LocationTimeIndex',
      KeyConditionExpression: 'locationId = :locationId AND requestedTime BETWEEN :startOfDay AND :endOfDay',
      FilterExpression: '#status IN (:requested, :inProgress)',
      ExpressionAttributeNames: {
        '#status': 'status'
      },
      ExpressionAttributeValues: {
        ':locationId': locationId,
        ':startOfDay': startOfDay,
        ':endOfDay': endOfDay,
        ':requested': 'REQUESTED',
        ':inProgress': 'IN_PROGRESS'
      }
    }));

    // Calculate total pending duration
    let totalPendingDuration = 0;

    // Add booking durations
    if (pendingBookings.Items) {
      for (const booking of pendingBookings.Items) {
        totalPendingDuration += (booking as any).duration || 0;
      }
    }

    // Add walk-in durations by looking up service durations
    if (pendingWalkins.Items) {
      const serviceIds = [...new Set(pendingWalkins.Items.map((walkin: any) => walkin.serviceId))] as string[];
      
      if (serviceIds.length > 0) {
        const services = await prisma.service.findMany({
          where: {
            id: { in: serviceIds }
          },
          select: {
            id: true,
            duration: true
          }
        });

        const serviceDurationMap = new Map(services.map(s => [s.id, s.duration]));

        for (const walkin of pendingWalkins.Items) {
          const duration = serviceDurationMap.get((walkin as any).serviceId) || 0;
          totalPendingDuration += Number(duration);
        }
      }
    }

    return totalPendingDuration;
  }
}
