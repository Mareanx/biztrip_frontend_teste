import { Meta, StoryObj } from "@storybook/react";
import { Home } from "../pages/Home";
import { http, HttpResponse } from "msw";
import { mockCredentials } from "./mocks/mockCredentials";

const meta = {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [
        http.get("/api/credentials", ({ request }) => {
          const url = new URL(request.url);
          const page = url.searchParams.get("page") || "1";
          const perPage = 10;
          const start = (Number(page) - 1) * perPage;
          const end = start + perPage;
          const paginatedItems = mockCredentials.slice(start, end);

          return HttpResponse.json({
            data: paginatedItems,
            totalPages: Math.ceil(mockCredentials.length / perPage),
          });
        }),

        http.post("/api/credentials/:uuid/activate", () => {
          return HttpResponse.json({ success: true });
        }),

        http.post("/api/credentials/:uuid/deactivate", () => {
          return HttpResponse.json({ success: true });
        }),
      ],
    },
  },
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LoadingState: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/credentials", () => {
          return new HttpResponse(null, { status: 200 });
        }),
      ],
    },
  },
};

export const EmptyState: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/credentials", () => {
          return HttpResponse.json({
            data: [],
            totalPages: 0,
          });
        }),
      ],
    },
  },
};

export const ErrorState: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/credentials", () => {
          return new HttpResponse(null, {
            status: 500,
            statusText: "Internal Server Error",
          });
        }),
      ],
    },
  },
};
