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
        "https://pojazdlex.netlify.app/*  https://pojazdlex.pl/:splat  301!",
        "http://pojazdlex.netlify.app/*  https://pojazdlex.pl/:splat  301!",
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

function generateSitemap(): Plugin {
  return {
    name: "generate-sitemap",
    apply: "build",

    generateBundle() {
      const siteUrl = "https://pojazdlex.pl";

      const escapeXml = (value: string) =>
        value
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&apos;");

      const urls = PUBLIC_ROUTES.map((path) => {
        const url = new URL(path, siteUrl).href;

        return [
          "  <url>",
          `    <loc>${escapeXml(url)}</loc>`,
          "  </url>",
        ].join("\n");
      });

      const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...urls,
        "</urlset>",
        "",
      ].join("\n");

      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: sitemap,
      });
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    generateNetlifyRedirects(),
    generateSitemap(),
  ],
});
