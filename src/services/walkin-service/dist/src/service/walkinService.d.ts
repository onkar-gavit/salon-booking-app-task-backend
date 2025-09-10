import { CreateWalkinRequest, CreateWalkinResponse } from '../models/walkin.models';
export declare class WalkinService {
    createWalkin(request: CreateWalkinRequest, businessId: string): Promise<CreateWalkinResponse>;
    private validateWalkinRequest;
    private calculateEstimatedWaitTime;
}
//# sourceMappingURL=walkinService.d.ts.map