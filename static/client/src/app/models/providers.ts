import { ApiResponse } from './api-response'

export class Provider {
  providerId: string;
  connected: boolean;
};

export class ProvidersResponse {
  data: Provider[];
};
