import { defineConfig } from 'astro/config';

import deno from "@astrojs/deno";
import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno({
    host: 'localhost',
    port: 5000
  }),
  integrations: [mdx()]
});
