import { ApiResponse } from './api-response';

export class Provider {
  providerId = '';
  connected = false;
}

export class ProvidersResponse extends ApiResponse {
  data: Provider[];
}
