// Temporary Prisma client interface until schema is regenerated
export interface PrismaClientInterface {
  customer: {
    findFirst: (args: any) => Promise<any>;
  };
  location: {
    findFirst: (args: any) => Promise<any>;
  };
  service: {
    findFirst: (args: any) => Promise<any>;
    findMany: (args: any) => Promise<any>;
  };
}

// Mock implementation for now - will be replaced with actual Prisma client
export const createPrismaClient = (): PrismaClientInterface => {
  return {
    customer: {
      findFirst: async () => ({ id: 'mock', businessId: 'mock', name: 'Mock Customer' })
    },
    location: {
      findFirst: async () => ({ id: 'mock', businessId: 'mock', name: 'Mock Location' })
    },
    service: {
      findFirst: async () => ({ id: 'mock', businessId: 'mock', duration: 30 }),
      findMany: async () => [{ id: 'mock', duration: 30 }]
    }
  };
};
