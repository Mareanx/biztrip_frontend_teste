import * as yup from "yup";
export const loginSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(6, "A senha deve ter no mínimo 8 caracteres"),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
