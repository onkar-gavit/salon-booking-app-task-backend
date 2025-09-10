export interface Walkin {
  id: string;
  locationId: string;
  customerId: string;
  serviceId: string;
  businessId: string;
  requestedTime: string; // ISO string
  estimatedWaitTime: number; // in minutes
  status: WalkinStatus;
  notes?: string;
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
}

export enum WalkinStatus {
  REQUESTED = 'REQUESTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export interface CreateWalkinRequest {
  locationId: string;
  customerId: string;
  serviceId: string;
  notes?: string;
}

export interface CreateWalkinResponse {
  walkin: Walkin;
  estimatedWaitTime: number;
}

export interface WalkinWithEstimate extends Walkin {
  estimatedWaitTime: number;
}
