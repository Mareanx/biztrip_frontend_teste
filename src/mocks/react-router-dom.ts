// src/__mocks__/react-router-dom.ts
import { jest } from "@storybook/jest";
import { useNavigate as actualUseNavigate } from "react-router-dom";

export const useNavigate = jest.fn(() => actualUseNavigate());

export {
  MemoryRouter,
  BrowserRouter,
  HashRouter,
  Link,
  NavLink,
} from "react-router-dom";
