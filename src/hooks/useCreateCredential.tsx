import { useEffect, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from "react-hot-toast";
import { baseSchema, generateFullSchema } from "../schema/form_create_schema";
import {
  createCredential,
  getProviders,
  getParametersProvider,
} from "../services/api";
import { Parameter } from "../schema/form_create_schema";
import * as yup from "yup";

const SERVICE_TYPES = {
  road: "Road",
  airway: "Airway",
  hotel: "Hotel",
  vehicle: "Vehicle",
};

export type CreateCredentialForm = Record<string, any>;

type Provider = {
  uuid: string;
  name: string;
  logo: string;
};

export interface CreateCredentialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreated?: () => void;
}

export interface UseCreateCredentialDialogReturn {
  formMethods: UseFormReturn<CreateCredentialForm>;
  providers: Provider[];
  serviceTypes: { value: string; label: string }[];
  parameters: Parameter[];
  loadingParameters: boolean;
  hasServiceTypes: boolean;
  handleSubmit: (data: CreateCredentialForm) => Promise<void>;
  selectedProvider?: string;
}

export function useCreateCredentialDialog({
  open,
  onOpenChange,
  onCreated,
}: CreateCredentialDialogProps): UseCreateCredentialDialogReturn {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [serviceTypes, setServiceTypes] = useState<
    { value: string; label: string }[]
  >([]);
  const [parameters, setParameters] = useState<Parameter[]>([]);
  const [loadingParameters, setLoadingParameters] = useState(false);
  const [hasServiceTypes, setHasServiceTypes] = useState(true);
  const [currentSchema, setCurrentSchema] =
    useState<yup.ObjectSchema<Record<string, any>>>(baseSchema);

  const formMethods = useForm<CreateCredentialForm>({
    resolver: yupResolver(currentSchema),
    defaultValues: {
      service_type: "road",
    },
  });

  const selectedProvider = formMethods.watch("provider_uuid");

  useEffect(() => {
    if (open) {
      getProviders()
        .then(setProviders)
        .catch((e) => {
          toast.error("Erro ao carregar fornecedores");
          console.error(e);
        });
    }
  }, [open]);

  useEffect(() => {
    if (selectedProvider) {
      setLoadingParameters(true);
      getParametersProvider(selectedProvider)
        .then((response) => {
          if (!response || !response.data) {
            throw new Error("Dados inválidos retornados pela API");
          }

          const { service_types, parameters } = response.data;
          const hasServiceTypes = service_types?.length > 0;

          setCurrentSchema(generateFullSchema(hasServiceTypes, parameters));
          setHasServiceTypes(hasServiceTypes);

          const formattedServiceTypes = hasServiceTypes
            ? service_types.map((type: string) => ({
                value: type,
                label:
                  SERVICE_TYPES[type as keyof typeof SERVICE_TYPES] || type,
              }))
            : Object.entries(SERVICE_TYPES).map(([value, label]) => ({
                value,
                label,
              }));

          setServiceTypes(formattedServiceTypes);
          setParameters(parameters);
        })
        .catch((error) => {
          toast.error("Erro ao carregar parâmetros do provedor");
          console.error(error);
        })
        .finally(() => {
          setLoadingParameters(false);
        });
    } else {
      setServiceTypes([]);
      setParameters([]);
      setCurrentSchema(baseSchema);
    }
  }, [selectedProvider]);

  const handleSubmit = async (data: CreateCredentialForm) => {
    try {
      const credential_parameters = parameters.map((param) => ({
        value: data[param.uuid],
        credential_parameter_uuid: param.uuid,
      }));

      const serviceType = hasServiceTypes ? data.service_type : "road";

      await createCredential(data.provider_uuid, {
        description: data.description,
        service_type: serviceType!,
        parameters: credential_parameters,
      });

      toast.success("Credencial criada com sucesso!");
      formMethods.reset();
      onOpenChange(false);
      onCreated?.();
    } catch (error) {
      toast.error("Erro ao criar credencial");
      console.error(error);
    }
  };

  return {
    formMethods,
    providers,
    serviceTypes,
    parameters,
    loadingParameters,
    hasServiceTypes,
    handleSubmit,
    selectedProvider,
  };
}
