import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://demo-dra-edysbell-barrios-odontologa-alfonsodelag.vercel.app",
  integrations: [sitemap()],
});
