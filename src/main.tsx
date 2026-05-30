import "./theme/globals.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <p>
      Run <code>pnpm ladle</code> to view components.
    </p>
  </StrictMode>,
);
