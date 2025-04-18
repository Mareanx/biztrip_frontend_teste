interface MockCredential {
    credential_uuid: string;
    description: string;
    active: boolean;
    provider: {
      name: string;
      slug: string;
    };
    service_type?: string;
  }
  
  export const mockCredentials: MockCredential[] = Array.from({ length: 25 }, (_, i) => ({
    credential_uuid: `cred-${i + 1}`,
    description: `Credencial ${i + 1}`,
    active: i % 2 === 0,
    provider: {
      name: `Provedor ${(i % 3) + 1}`,
      slug: `provider-${(i % 3) + 1}`,
    },
    service_type: i % 2 === 0 ? 'road' : 'airway',
  }));

export interface Provider {
  uuid: string;
  name: string;
}

export interface ServiceType {
  value: string;
  label: string;
}

export interface Parameter {
  uuid: string;
  title: string;
  required: boolean;
  input_type: string;
  description: string;
}

export const mockProviders: Provider[] = [
  { uuid: '1', name: 'Google Cloud' },
  { uuid: '2', name: 'AWS' },
  { uuid: '3', name: 'Azure' },
];

export const mockServiceTypes: ServiceType[] = [
  { value: 'storage', label: 'Cloud Storage' },
  { value: 'compute', label: 'Compute Engine' },
];

export const mockParameters: Parameter[] = [
  {
    uuid: 'api-key',
    title: 'API Key',
    required: true,
    input_type: 'text',
    description: 'Insira sua chave API'
  },
  {
    uuid: 'secret-key',
    title: 'Secret Key',
    required: false,
    input_type: 'password',
    description: 'Insira sua chave secreta'
  },
];