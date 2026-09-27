// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://shimmering-taffy-9c221a.netlify.app",
  integrations: [preact()]
});