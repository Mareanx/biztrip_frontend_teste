import { Provider } from "./provider_interface";

export type Credential = {
  credential_uuid: string;
  description: string;
  service_type: string;
  provider: Provider;
  active: boolean;
  credential_values: string;
  last_page: number;
};

export type EditCredential = {
  credential_description: string;
  service_type: string;
  provider_uuid: string;
  credential_values: Array<{
    uuid: string;
    name: string;
    value: unknown;
    parameter: {
      uuid: string;
      title: string;
      input_type: string;
      description: string;
      required: boolean;
    };
  }>;
};

export type CreateCredentialPayload = {
  description: string;
  service_type: string;
  parameters: {
    value: unknown;
    credential_parameter_uuid: string;
  }[];
};

export type EditCredentialPayload = {
  description: string;
  service_type: string;
  credentials: {
    value: unknown;
    uuid: string;
  }[];
};
