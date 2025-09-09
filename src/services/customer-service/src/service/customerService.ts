import { PrismaClient } from '../../../../../libs/generated/client';
import { CustomerCreateRequest, CustomerResponse } from '../models/customer.models';
import { ConflictError, NotFoundError } from '../utils/errors';
import { logger } from '../../../../../libs/common-utils/src/logger';

const prisma = new PrismaClient();

export class CustomerService {
  async createCustomer(
    businessId: string,
    customerData: CustomerCreateRequest
  ): Promise<CustomerResponse> {
    try {
      logger.info('Creating customer', { businessId, phone: customerData.phone });

      // Check if customer with this phone already exists for this business
      const existingCustomer = await prisma.customer.findUnique({
        where: {
          unique_phone_per_business: {
            businessId,
            phone: customerData.phone,
          },
        },
      });

      if (existingCustomer) {
        throw new ConflictError(
          `Customer with phone ${customerData.phone} already exists for this business`
        );
      }

      // Create new customer
      const customer = await prisma.customer.create({
        data: {
          businessId,
          name: customerData.name,
          phone: customerData.phone,
          email: customerData.email,
        },
      });

      logger.info('Customer created successfully', { customerId: customer.id });

      return {
        id: customer.id,
        businessId: customer.businessId,
        name: customer.name,
        phone: customer.phone,
        email: customer.email || undefined,
        createdAt: customer.createdAt.toISOString(),
        updatedAt: customer.updatedAt.toISOString(),
      };
    } catch (error) {
      logger.error('Failed to create customer', { error, businessId, customerData });
      throw error;
    }
  }

  async getCustomerById(businessId: string, customerId: string): Promise<CustomerResponse> {
    try {
      const customer = await prisma.customer.findFirst({
        where: {
          id: customerId,
          businessId,
        },
      });

      if (!customer) {
        throw new NotFoundError(`Customer with ID ${customerId} not found`);
      }

      return {
        id: customer.id,
        businessId: customer.businessId,
        name: customer.name,
        phone: customer.phone,
        email: customer.email || undefined,
        createdAt: customer.createdAt.toISOString(),
        updatedAt: customer.updatedAt.toISOString(),
      };
    } catch (error) {
      logger.error('Failed to get customer', { error, businessId, customerId });
      throw error;
    }
  }

  async upsertCustomer(
    businessId: string,
    customerData: CustomerCreateRequest
  ): Promise<CustomerResponse> {
    try {
      logger.info('Upserting customer', { businessId, phone: customerData.phone });

      const customer = await prisma.customer.upsert({
        where: {
          unique_phone_per_business: {
            businessId,
            phone: customerData.phone,
          },
        },
        update: {
          name: customerData.name,
          email: customerData.email,
        },
        create: {
          businessId,
          name: customerData.name,
          phone: customerData.phone,
          email: customerData.email,
        },
      });

      logger.info('Customer upserted successfully', { customerId: customer.id });

      return {
        id: customer.id,
        businessId: customer.businessId,
        name: customer.name,
        phone: customer.phone,
        email: customer.email || undefined,
        createdAt: customer.createdAt.toISOString(),
        updatedAt: customer.updatedAt.toISOString(),
      };
    } catch (error) {
      logger.error('Failed to upsert customer', { error, businessId, customerData });
      throw error;
    }
  }
}
