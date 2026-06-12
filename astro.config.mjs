import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://demo-dra-edysbell-barrios-odontolog.vercel.app",
  integrations: [sitemap()],
});
