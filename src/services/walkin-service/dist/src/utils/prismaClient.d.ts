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
export declare const createPrismaClient: () => PrismaClientInterface;
//# sourceMappingURL=prismaClient.d.ts.map