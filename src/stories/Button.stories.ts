// stories/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonElement as Button } from "../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "ghost", "outline"],
      description: "Estilo visual do botão",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Tamanho do botão",
    },
    fullWidth: {
      control: "boolean",
      description: "Ocupa 100% da largura",
    },
    loading: {
      control: "boolean",
      description: "Estado de carregamento",
    },
    disabled: {
      control: "boolean",
      description: "Estado desabilitado",
    },
    icon: {
      control: false,
      description: "Ícone opcional",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    children: "Search",
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    children: "Processing",
    loading: true,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};
