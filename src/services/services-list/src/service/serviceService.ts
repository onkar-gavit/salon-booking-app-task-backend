import { PrismaClient } from '../../../../../libs/generated/client';
import { ServiceResponse } from '../models/service.models';

// Simple console logger for Lambda environment
const logger = {
  info: (message: string, meta?: any) => console.log(`[INFO] ${message}`, meta || ''),
  error: (message: string, meta?: any) => console.error(`[ERROR] ${message}`, meta || ''),
  warn: (message: string, meta?: any) => console.warn(`[WARN] ${message}`, meta || ''),
  debug: (message: string, meta?: any) => console.debug(`[DEBUG] ${message}`, meta || ''),
};

const prisma = new PrismaClient();

export class ServiceService {
  async getServices(businessId: string): Promise<ServiceResponse[]> {
    try {
      logger.info('Fetching services for business', { businessId });

      const services = await prisma.service.findMany({
        where: {
          // businessId,
          isActive: true,
        },
        orderBy: {
          name: 'asc',
        },
      });

      logger.info('Services fetched successfully', { 
        businessId, 
        count: services.length 
      });

      return services.map(service => ({
        id: service.id,
        businessId: service.businessId,
        name: service.name,
        description: service.description || undefined,
        duration: service.duration,
        price: service.price.toString(),
        isActive: service.isActive,
        createdAt: service.createdAt.toISOString(),
        updatedAt: service.updatedAt.toISOString(),
      }));
    } catch (error) {
      logger.error('Failed to fetch services', { error, businessId });
      throw error;
    }
  }
}
