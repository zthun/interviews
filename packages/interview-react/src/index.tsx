import { ZRouter } from "@zthun/fashion-boutique";
import React from "react";
import { createRoot } from "react-dom/client";
import { ZInterviewApp } from "./app/app.js";

const container = createRoot(document.getElementById("zthunworks-interview")!);

container.render(
  <React.StrictMode>
    <ZRouter>
      <ZInterviewApp />
    </ZRouter>
  </React.StrictMode>,
);
