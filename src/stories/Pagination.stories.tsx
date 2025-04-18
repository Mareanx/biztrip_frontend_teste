// src/stories/Pagination.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../components/Pagination";
import { useState } from "react";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    currentPage: { control: { type: "number", min: 1 } },
    totalPages: { control: { type: "number", min: 1 } },
    onPageChange: { action: "pageChanged" },
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "2rem", position: "relative", height: "100px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Herda os args do meta
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 1,
    totalPages: 3,
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
};

export const FirstPageSelected: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
};

export const LastPageSelected: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
};

export const MiddleRangeSelected: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
};

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.currentPage);
    return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
  },
};

export const InteractiveExample: Story = {
  args: {
    currentPage: 1,
    totalPages: 15,
  },
  render: function Render(args) {
    const [page, setPage] = useState(args.currentPage);
    return (
      <div>
        <div style={{ marginBottom: "1rem" }}>
          Página atual: <strong>{page}</strong>
        </div>
        <Pagination {...args} currentPage={page} onPageChange={setPage} />
      </div>
    );
  },
};
