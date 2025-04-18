// src/stories/ConfirmDialog.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmDialog } from "../components/Dialog/ConfirmDialog";
import { fn } from "@storybook/test";
import { useState } from "react";

const meta = {
  title: "Components/ConfirmDialog",
  component: ConfirmDialog,
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    onOpenChange: { action: "onOpenChange" },
    title: { control: "text" },
    description: { control: "text" },
    onConfirm: { action: "confirmed" },
    confirmLabel: { control: "text" },
    cancelLabel: { control: "text" },
  },
  args: {
    title: "Confirmação necessária",
    description:
      "Tem certeza que deseja executar esta ação? Esta operação não pode ser desfeita.",
    confirmLabel: "Confirmar",
    cancelLabel: "Cancelar",
    onConfirm: fn(),
  },
} satisfies Meta<typeof ConfirmDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setOpen(true)}>Abrir Diálogo</button>
        <ConfirmDialog {...args} open={open} onOpenChange={setOpen} />
      </div>
    );
  },
};

export const CustomLabels: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    confirmLabel: "Sim, deletar",
    cancelLabel: "Não, cancelar",
    title: "Deletar item",
    description: "Esta ação irá deletar permanentemente o item selecionado.",
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setOpen(true)}>Abrir Diálogo de Exclusão</button>
        <ConfirmDialog {...args} open={open} onOpenChange={setOpen} />
      </div>
    );
  },
};

export const DangerAction: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    confirmLabel: "Confirmar ação perigosa",
    title: "Ação perigosa",
    description:
      "Você está prestes a executar uma ação que não pode ser desfeita. Tem certeza?",
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setOpen(true)}>Abrir Diálogo de Perigo</button>
        <ConfirmDialog {...args} open={open} onOpenChange={setOpen} />
      </div>
    );
  },
};
