import * as yup from "yup";

export interface Parameter {
  uuid: string;
  title: string;
  description: string;
  input_type: string;
  required: boolean;
}

export const baseSchema: yup.ObjectSchema<Record<string, any>> = yup.object({
  description: yup.string().required("Descrição é obrigatória"),
  provider_uuid: yup.string().required("Fornecedor é obrigatório"),
});

export function generateFullSchema(
  hasServiceTypes: boolean,
  parameters: Parameter[]
): yup.ObjectSchema<Record<string, any>> {
  const dynamicFields = parameters.reduce((acc, param) => {
    acc[param.uuid] = param.required
      ? yup.string().required(`${param.title} é obrigatório`)
      : yup.string();
    return acc;
  }, {} as Record<string, yup.StringSchema>);

  return yup.object({
    service_type: hasServiceTypes ? yup.string().required() : yup.string(),
    ...dynamicFields,
  });
}

export const initialSchema = baseSchema.shape({
  service_type: yup.string(),
});

export const formSchema = initialSchema;
