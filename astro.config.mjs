import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://dra-edysbell-barrios.vercel.app",
  integrations: [sitemap()],
});
