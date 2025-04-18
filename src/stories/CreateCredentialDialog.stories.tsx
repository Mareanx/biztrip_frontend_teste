// src/stories/CreateCredentialDialog.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { CreateCredentialDialog } from "../components/Dialog/CredentialCreateDialog";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/CreateCredentialDialog",
  component: CreateCredentialDialog,
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    onOpenChange: { action: "onOpenChange" },
    onCreated: { action: "onCreated" },
  },
  args: {
    open: true,
    onOpenChange: fn(),
    onCreated: fn(),
  },
} satisfies Meta<typeof CreateCredentialDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockProviders = [
  { uuid: "1", name: "Google Cloud" },
  { uuid: "2", name: "AWS" },
  { uuid: "3", name: "Azure" },
];

const mockParameters = [
  {
    uuid: "api-key",
    title: "API Key",
    required: true,
    input_type: "text",
    description: "Insira sua chave API",
  },
  {
    uuid: "secret-key",
    title: "Secret Key",
    required: false,
    input_type: "password",
    description: "Insira sua chave secreta",
  },
];

export const Default: Story = {
  args: {
    open: true,
  },
  parameters: {
    mockData: [
      {
        url: "/api/providers",
        method: "GET",
        status: 200,
        response: mockProviders,
      },
      {
        url: "/api/providers/1/parameters",
        method: "GET",
        status: 200,
        response: {
          service_types: ["storage", "compute"],
          parameters: mockParameters,
        },
      },
    ],
  },
};

export const LoadingState: Story = {
  args: {
    open: true,
  },
  parameters: {
    mockData: [
      {
        url: "/api/providers",
        method: "GET",
        status: 200,
        response: mockProviders,
        delay: 2000,
      },
      {
        url: "/api/providers/*/parameters",
        method: "GET",
        status: 200,
        response: {},
        delay: 2000,
      },
    ],
  },
};

export const WithSelectedProvider: Story = {
  args: {
    
  },
  render: (args) => {
    return <CreateCredentialDialog {...args} />;
  },
  parameters: {
    mockData: [
      {
        url: "/api/providers",
        method: "GET",
        status: 200,
        response: mockProviders,
      },
      {
        url: "/api/providers/1/parameters",
        method: "GET",
        status: 200,
        response: {
          service_types: ["storage", "compute"],
          parameters: mockParameters,
        },
      },
    ],
  },
};

export const WithValidationErrors: Story = {
  args: {

  },
  render: (args) => {
    return <CreateCredentialDialog {...args} />;
  },
  parameters: {
    mockData: [
      {
        url: "/api/providers",
        method: "GET",
        status: 200,
        response: mockProviders,
      },
      {
        url: "/api/providers/1/parameters",
        method: "GET",
        status: 200,
        response: {
          service_types: ["storage", "compute"],
          parameters: mockParameters,
        },
      },
    ],
  },
};
