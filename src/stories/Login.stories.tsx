// src/stories/Login.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Login } from "../components/Login";
import { within, userEvent, expect, fn } from "@storybook/test";
import { HttpResponse, http } from "msw";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = fn();

const meta = {
  title: "Pages/Login",
  component: Login,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [
        http.post("/api/login", () => {
          return HttpResponse.json({ success: true });
        }),
      ],
    },
  },
} satisfies Meta<typeof Login>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: /entrar/i }));

    await expect(canvas.getByText("Email é obrigatório")).toBeInTheDocument();
    await expect(canvas.getByText("Senha é obrigatória")).toBeInTheDocument();
  },
};

export const SuccessfulLogin: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post("/api/login", () => {
          return HttpResponse.json({ success: true });
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText("Digite seu email"),
      "usuario@exemplo.com"
    );
    await userEvent.type(canvas.getByPlaceholderText("••••••"), "senha123");

    await userEvent.click(canvas.getByRole("button", { name: /entrar/i }));

    await expect(mockNavigate).toHaveBeenCalledWith("/");
  },
};

export const FailedLogin: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post("/api/login", () => {
          return HttpResponse.json(
            { error: "Credenciais inválidas" },
            { status: 401 }
          );
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText("Digite seu email"),
      "usuario@exemplo.com"
    );
    await userEvent.type(canvas.getByPlaceholderText("••••••"), "senha-errada");

    await userEvent.click(canvas.getByRole("button", { name: /entrar/i }));

    await expect(mockNavigate).not.toHaveBeenCalled();
  },
};

export const LoadingState: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post("/api/login", async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          return HttpResponse.json({ success: true });
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByPlaceholderText("Digite seu email"),
      "usuario@exemplo.com"
    );
    await userEvent.type(canvas.getByPlaceholderText("••••••"), "senha123");
    await userEvent.click(canvas.getByRole("button", { name: /entrar/i }));
  },
};
