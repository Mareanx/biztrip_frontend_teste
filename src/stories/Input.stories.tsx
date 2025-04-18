// stories/Input.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input/index";
import type { InputProps } from "../components/Input/types";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    inputSize: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Tamanho do input",
    },
    fullWidth: {
      control: "boolean",
      description: "Ocupa 100% da largura do container",
    },
    label: {
      control: "text",
      description: "Label do input",
    },
    placeholder: {
      control: "text",
      description: "Texto placeholder",
    },
    errorMessage: {
      control: "text",
      description: "Mensagem de erro",
    },
    iconLeft: {
      control: false,
      description: "Ícone à esquerda",
    },
    iconRight: {
      control: false,
      description: "Ícone à direita",
    },
    css: {
      control: false,
      description: "Estilos customizados com Stitches",
    },
    id: {
      control: "text",
      description: "ID único para acessibilidade",
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
      description: "Tipo do input",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    id: "default-input",
    placeholder: "Digite algo...",
    inputSize: "md",
  },
};

export const WithLabel: Story = {
  args: {
    ...Default.args,
    id: "labeled-input",
    label: "Nome completo",
  },
};

export const WithIcons: Story = {
  args: {
    ...Default.args,
    id: "icon-input",
    label: "Buscar",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    id: "error-input",
    label: "Email",
    errorMessage: "Email inválido",
    placeholder: "exemplo@email.com",
  },
};

export const FullWidthInput: Story = {
  args: {
    ...Default.args,
    id: "fullwidth-input",
    label: "Endereço completo",
    fullWidth: true,
    placeholder: "Rua, número, complemento...",
  },
};

export const DisabledInput: Story = {
  args: {
    ...Default.args,
    id: "disabled-input",
    label: "Campo desabilitado",
    placeholder: "Campo não editável",
  },
};
