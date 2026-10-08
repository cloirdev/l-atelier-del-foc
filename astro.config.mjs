// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://latelierdelfoc.com",
  integrations: [sitemap({
    i18n: {
      defaultLocale: "es",
      locales: {
        es: "es",
        va: "va",
      },
    },
  }), mdx()],
});