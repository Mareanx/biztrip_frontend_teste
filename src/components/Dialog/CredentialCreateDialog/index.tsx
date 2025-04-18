import { Controller } from "react-hook-form";
import { CustomDialog } from "..";
import { FieldWrapper, Label } from "./styled";
import { Input } from "../../Input";
import { Select } from "../../Select";
import { useCreateCredentialDialog } from "../../../hooks/useCreateCredential";
import { CreateCredentialDialogProps } from "../../../hooks/useCreateCredential";

export function CreateCredentialDialog({
  open,
  onOpenChange,
  onCreated,
}: CreateCredentialDialogProps) {
  const {
    formMethods,
    providers,
    serviceTypes,
    parameters,
    loadingParameters,
    hasServiceTypes,
    handleSubmit,
    selectedProvider,
  } = useCreateCredentialDialog({ open, onOpenChange, onCreated });

  const {
    control,
    register,
    handleSubmit: formHandleSubmit,
    formState: { errors },
  } = formMethods;

  const onSubmit = formHandleSubmit(handleSubmit);

  return (
    <CustomDialog
      title="Nova credencial"
      description="Preencha os dados da nova credencial."
      onConfirm={onSubmit}
      confirmLabel="Criar"
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
                onValueChange={(value) => {
                  field.onChange(value);
                  formMethods.reset({ provider_uuid: value, service_type: "" });
                }}
                defaultValue={field.value}
                error={"Selecione um provedor"}
              />
            )}
          />
        </FieldWrapper>

        <FieldWrapper>
          <Label>
            Nome da Credencial<span>(obrigatório)</span>
          </Label>
          <Input
            id="description"
            inputSize="md"
            fullWidth
            {...register("description")}
            placeholder="Ex: API Key Google Maps"
          />
          {errors.description && (
            <p className="text-sm text-red-500 mt-1">
              {"Insira uma descrição válida"}
            </p>
          )}
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
                  error={"Selecione um tipo de serviço"}
                  disabled={!selectedProvider || loadingParameters}
                />
              )}
            />
          </FieldWrapper>
        )}

        {parameters.map((param) => (
          <FieldWrapper key={param.uuid}>
            <Label>
              {param.title}
              {param.required && <span>(obrigatório)</span>}
            </Label>
            <Input
              id={param.uuid}
              inputSize="md"
              fullWidth
              type={param.input_type}
              {...register(param.uuid)}
              placeholder={param.description}
            />
            {errors[param.uuid] && (
              <p className="text-sm text-red-500 mt-1">
                {String(errors[param.uuid]?.message)}
              </p>
            )}
          </FieldWrapper>
        ))}
      </form>
    </CustomDialog>
  );
}