import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-hot-toast";
import { CustomDialog } from "../components/Dialog";
import {
  editCredential,
  getProviders,
  getParametersProvider,
} from "../services/api";
import { FieldWrapper, Label } from "./styled";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { EditCredentialPayload } from "../data/model/credential_interface";

const SERVICE_TYPES = {
  road: "Road",
  airway: "Airway",
  hotel: "Hotel",
  vehicle: "Vehicle",
};

type EditCredentialForm = {
  description: string;
  provider_uuid?: string;
  service_type?: string;
  [dynamicUuid: string]: unknown;
};

type Provider = {
  uuid: string;
  name: string;
  logo: string;
};

type Parameter = {
  uuid: string;
  title: string;
  description: string;
  input_type: string;
  required: boolean;
};

interface EditCredentialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEdited?: () => void;
  initialData: {
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
}

export function EditCredentialDialog({
  open,
  onOpenChange,
  onEdited,
  initialData,
}: EditCredentialDialogProps) {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [serviceTypes, setServiceTypes] = useState<
    { value: string; label: string }[]
  >([]);
  const [parameters, setParameters] = useState<Parameter[]>([]);
  const [loadingParameters, setLoadingParameters] = useState(false);
  const [hasServiceTypes, setHasServiceTypes] = useState(true);

  const initialValues: EditCredentialForm = {
    description: initialData.credential_description,
    provider_uuid: initialData.provider_uuid,
    service_type: initialData.service_type,
    ...initialData.credential_values.reduce((acc, curr) => {
      acc[curr.uuid] = curr.value;
      return acc;
    }, {} as Record<string, unknown>),
  };

  const { control, register, handleSubmit, reset } =
    useForm<EditCredentialForm>({
      defaultValues: initialValues,
    });

  useEffect(() => {
    if (open) {
      getProviders()
        .then(setProviders)
        .catch((e) => {
          toast.error("Erro ao carregar fornecedores");
          console.error(e);
        });

      loadParameters(initialData.provider_uuid);
      reset(initialValues); // importante para atualizar os valores do formulário
    }
  }, [initialData, open]);

  const loadParameters = async (providerUuid: string) => {
    setLoadingParameters(true);
    try {
      const response = await getParametersProvider(providerUuid);
      const { service_types, parameters } = response.data;

      const hasServiceTypes = service_types && service_types.length > 0;
      setHasServiceTypes(hasServiceTypes);

      setParameters(parameters);

      const formattedServiceTypes = hasServiceTypes
        ? service_types.map((type: string) => ({
            value: type,
            label: SERVICE_TYPES[type as keyof typeof SERVICE_TYPES] || type,
          }))
        : Object.entries(SERVICE_TYPES).map(([value, label]) => ({
            value,
            label,
          }));

      setServiceTypes(formattedServiceTypes);
    } catch (error) {
      toast.error("Erro ao carregar parâmetros do provedor");
      console.error(error);
    } finally {
      setLoadingParameters(false);
    }
  };

  const onConfirm = handleSubmit(async (formData) => {
    try {
      console.log("Dados do formulário:", formData); // DEBUG

      const payload: EditCredentialPayload = {
        description: formData.description,
        service_type: hasServiceTypes
          ? (formData.service_type as string)
          : "road",
        credentials: initialData.credential_values.map((cv) => ({
          uuid: cv.uuid,
          value: formData[cv.uuid], // cada campo está registrado com seu uuid
        })),
      };

      console.log("Payload final:", payload); // DEBUG

      await editCredential(payload);
      toast.success("Credencial atualizada com sucesso!");
      onOpenChange(false);
      onEdited?.();
    } catch (error) {
      toast.error("Erro ao atualizar credencial");
      console.error(error);
    }
  });

  return (
    <CustomDialog
      title="Editar credencial"
      description="Atualize os dados da credencial."
      onConfirm={onConfirm}
      confirmLabel="Salvar"
      open={open}
      onOpenChange={onOpenChange}
      loading={loadingParameters}
    >
      <form className="space-y-4">
        <FieldWrapper>
          <Controller
            name="provider_uuid"
            control={control}
            render={({ field }) => (
              <Select
                label="Fornecedor"
                options={providers.map((p) => ({
                  value: p.uuid,
                  label: p.name,
                }))}
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={true}
              />
            )}
          />
        </FieldWrapper>

        <FieldWrapper>
          <Label>Nome da Credencial</Label>
          <Input
            id={"desc"}
            inputSize="md"
            fullWidth
            {...register("description")}
            placeholder="Ex: API Key Google Maps"
          />
        </FieldWrapper>

        {hasServiceTypes && (
          <FieldWrapper>
            <Controller
              name="service_type"
              control={control}
              render={({ field }) => (
                <Select
                  label="Tipo de Serviço"
                  options={serviceTypes}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                />
              )}
            />
          </FieldWrapper>
        )}

        {initialData.credential_values.map((cv) => (
          <FieldWrapper key={cv.uuid}>
            <Label>{cv.name}</Label>
            <Input
              id={""}
              inputSize="md"
              fullWidth
              type={cv.parameter.input_type}
              {...register(cv.uuid)}
              placeholder={cv.parameter.description}
            />
          </FieldWrapper>
        ))}
      </form>
    </CustomDialog>
  );
}
