import { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/Header";
import { fn } from "@storybook/test";
import { within, userEvent, expect } from "@storybook/test";

const meta = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    onCreateCredential: {
      action: "createCredentialClicked",
      description: "Callback quando o botão de nova credencial é clicado",
    },
    onSearch: {
      action: "searchTermChanged",
      description: "Callback quando o termo de busca é alterado",
    },
    searchTerm: {
      control: "text",
      description: "Valor atual da busca",
    },
  },
  parameters: {
    layout: "fullscreen", 
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchTerm: "",
    onCreateCredential: fn(),
    onSearch: fn(),
  },
};

export const WithSearchTerm: Story = {
  args: {
    ...Default.args,
    searchTerm: "credential-123",
  },
};

export const InteractiveTest: Story = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const searchInput = await canvas.getByPlaceholderText("Buscar credencial");
    await userEvent.type(searchInput, "test");
    await expect(args.onSearch).toHaveBeenCalled();

    const addButton = await canvas.getByRole("button", {
      name: /nova credencial/i,
    });
    await userEvent.click(addButton);
    await expect(args.onCreateCredential).toHaveBeenCalled();
  },
};
