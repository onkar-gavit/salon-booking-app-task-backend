export interface CreateCustomerRequest {
  name: string;
  phone: string;
  email?: string;
  businessId: string;
}

export interface CreateCustomerResponse {
  id: string;
  name: string;
  phone: string;
  email?: string;
  businessId: string;
  createdAt: string;
}

export interface CustomerServiceResult {
  success: boolean;
  data?: CreateCustomerResponse;
  error?: string;
}