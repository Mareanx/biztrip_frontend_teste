// schema/form_schema.ts
import * as yup from "yup";

// Tipos para os parâmetros dinâmicos
export type Parameter = {
  uuid: string;
  title: string;
  description: string;
  input_type: string
  required: boolean;
};

// Campos fixos
export const baseSchema = yup.object({
  description: yup.string().required("Informe o nome da credencial"),
});

export const generateFullSchema = (
  hasServiceTypes: boolean,
  parameters: Parameter[] = []
) => {
  const serviceTypeValidation = hasServiceTypes
    ? yup.string().required("Selecione o tipo de serviço")
    : yup.string().notRequired();

  const dynamicValidations: Record<string, yup.StringSchema> = {};

  parameters.forEach((param) => {
    dynamicValidations[param.uuid] = param.required
      ? yup.string().required(`${param.title} é obrigatório`)
      : yup.string();
  });

  return baseSchema.shape({
    service_type: serviceTypeValidation,
    ...dynamicValidations,
  });
};

export const initialSchema = baseSchema.shape({
  service_type: yup.string(),
});

export const formSchema = initialSchema;