import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { FormRoot } from "../../components/Form/Root";
import { FormField } from "../../components/Form/Field";
import { Input } from "../../components/Input";
import {
  LoginContainer,
  FormTitle,
  ErrorMessage,
  Label,
  PasswordWrapper,
  TogglePasswordButton,
} from "./styled";
import { ButtonElement } from "../../components/Button";

import { loginSchema, LoginFormData } from "../../schema/login_schema";
import { login } from "../../services/auth";
import { LoginLoadingOverlay } from "../../components/LoadingOverlay";
import { Eye, EyeOff } from "lucide-react"; // Ícones para alternar visibilidade

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para alternar visibilidade da senha
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      await login(data.email, data.password);
      toast.success("Login realizado com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Erro ao fazer login. Verifique suas credenciais.");
      console.error("Erro ao fazer login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LoginLoadingOverlay />}

      <LoginContainer>
        <FormRoot onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Login</FormTitle>

          {/* Campo Email */}
          <FormField name="email">
            <Label>Email:</Label>
            <Input
              id="email"
              fullWidth={true}
              {...register("email")}
              type="email"
              placeholder="Digite seu email"
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FormField>

          {/* Campo Senha */}
          <FormField name="password">
            <Label>Senha</Label>
            <PasswordWrapper>
              <Input
                id="password"
                fullWidth={true}
                {...register("password")}
                type={showPassword ? "text" : "password"} // Alterna entre "text" e "password"
                placeholder="••••••"
              />
              <TogglePasswordButton
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Alterna o estado
              >
                {showPassword ? <EyeOff /> : <Eye />}{" "}
                {/* Ícones para alternar */}
              </TogglePasswordButton>
            </PasswordWrapper>
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </FormField>

          <ButtonElement variant="primary" fullWidth={true}>
            Entrar
          </ButtonElement>
        </FormRoot>
      </LoginContainer>
    </>
  );
}
