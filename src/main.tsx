import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <Toaster position="bottom-right" reverseOrder={false} /> {<App />}
    </>
  </StrictMode>
);
