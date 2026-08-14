import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

import { PUBLIC_ROUTES } from "./src/config/routes.js";

function generateNetlifyRedirects(): Plugin {
  return {
    name: "generate-netlify-redirects",
    apply: "build",

    generateBundle() {
      const routeRules = PUBLIC_ROUTES
        .filter((path) => path !== "/")
        .map((path) => `${path}  /index.html  200`);

      const redirectsContent = [
        ...routeRules,
        "/*  /index.html  404",
        "",
      ].join("\n");

      this.emitFile({
        type: "asset",
        fileName: "_redirects",
        source: redirectsContent,
      });
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    generateNetlifyRedirects(),
  ],
});
