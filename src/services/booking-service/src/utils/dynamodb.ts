import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, QueryCommand, GetCommand } from "@aws-sdk/lib-dynamodb";
import { Booking } from "../models/booking.models";

const client = new DynamoDBClient({ region: process.env.CUSTOM_AWS_REGION });
const docClient = DynamoDBDocumentClient.from(client);

const BOOKINGS_TABLE = process.env.DYNAMODB_BOOKINGS_TABLE || 'BookingsTable';

export class DynamoDBService {
  async saveBooking(booking: Booking): Promise<void> {
    const command = new PutCommand({
      TableName: BOOKINGS_TABLE,
      Item: booking,
    });

    await docClient.send(command);
  }

  async getBookingsByLocationAndTimeRange(
    locationId: string,
    startTime: string,
    endTime: string
  ): Promise<Booking[]> {
    const command = new QueryCommand({
      TableName: BOOKINGS_TABLE,
      IndexName: 'LocationTimeIndex', // GSI for location-based queries
      KeyConditionExpression: 'locationId = :locationId AND startTime BETWEEN :startTime AND :endTime',
      ExpressionAttributeValues: {
        ':locationId': locationId,
        ':startTime': startTime,
        ':endTime': endTime,
      },
    });

    const result = await docClient.send(command);
    return result.Items as Booking[] || [];
  }

  async getBookingById(bookingId: string): Promise<Booking | null> {
    const command = new GetCommand({
      TableName: BOOKINGS_TABLE,
      Key: { id: bookingId },
    });

    const result = await docClient.send(command);
    return result.Item as Booking || null;
  }
}
