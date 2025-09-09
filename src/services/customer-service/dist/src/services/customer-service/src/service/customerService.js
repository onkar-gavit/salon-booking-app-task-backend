"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const client_1 = require("../../../../../libs/generated/client");
const errors_1 = require("../utils/errors");
const logger_1 = require("../../../../../libs/common-utils/src/logger");
const prisma = new client_1.PrismaClient();
class CustomerService {
    async createCustomer(businessId, customerData) {
        try {
            logger_1.logger.info('Creating customer', { businessId, phone: customerData.phone });
            const existingCustomer = await prisma.customer.findUnique({
                where: {
                    unique_phone_per_business: {
                        businessId,
                        phone: customerData.phone,
                    },
                },
            });
            if (existingCustomer) {
                throw new errors_1.ConflictError(`Customer with phone ${customerData.phone} already exists for this business`);
            }
            const customer = await prisma.customer.create({
                data: {
                    businessId,
                    name: customerData.name,
                    phone: customerData.phone,
                    email: customerData.email,
                },
            });
            logger_1.logger.info('Customer created successfully', { customerId: customer.id });
            return {
                id: customer.id,
                businessId: customer.businessId,
                name: customer.name,
                phone: customer.phone,
                email: customer.email || undefined,
                createdAt: customer.createdAt.toISOString(),
                updatedAt: customer.updatedAt.toISOString(),
            };
        }
        catch (error) {
            logger_1.logger.error('Failed to create customer', { error, businessId, customerData });
            throw error;
        }
    }
    async getCustomerById(businessId, customerId) {
        try {
            const customer = await prisma.customer.findFirst({
                where: {
                    id: customerId,
                    businessId,
                },
            });
            if (!customer) {
                throw new errors_1.NotFoundError(`Customer with ID ${customerId} not found`);
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
        }
        catch (error) {
            logger_1.logger.error('Failed to get customer', { error, businessId, customerId });
            throw error;
        }
    }
    async upsertCustomer(businessId, customerData) {
        try {
            logger_1.logger.info('Upserting customer', { businessId, phone: customerData.phone });
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
            logger_1.logger.info('Customer upserted successfully', { customerId: customer.id });
            return {
                id: customer.id,
                businessId: customer.businessId,
                name: customer.name,
                phone: customer.phone,
                email: customer.email || undefined,
                createdAt: customer.createdAt.toISOString(),
                updatedAt: customer.updatedAt.toISOString(),
            };
        }
        catch (error) {
            logger_1.logger.error('Failed to upsert customer', { error, businessId, customerData });
            throw error;
        }
    }
}
exports.CustomerService = CustomerService;
//# sourceMappingURL=customerService.js.map