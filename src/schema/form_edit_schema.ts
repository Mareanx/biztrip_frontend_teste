// schema/editCredentialSchema.ts
import * as yup from "yup";

type Parameter = {
  uuid: string;
  title: string;
  required: boolean;
};

export const baseEditSchema = yup.object({
  description: yup.string().required("Informe o nome da credencial"),
  provider_uuid: yup.string().notRequired(), // Não obrigatório
});

export const generateEditSchema = (
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

  return baseEditSchema.shape({
    service_type: serviceTypeValidation,
    ...dynamicValidations,
  });
};
