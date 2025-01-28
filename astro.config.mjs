import { defineConfig, envField } from "astro/config";


import tailwind from "@astrojs/tailwind";

import netlify from '@astrojs/netlify';

import vercel from '@astrojs/vercel';

export default defineConfig({
  devToolbar: {
    enabled: false
  },

  //Se inicializara un sevidor cuando se requiera, lo que es estatico se quedará estático, pero lo que no, se ayudará con un servidor
  output: "server",

  integrations: [tailwind()],

  env: { // Define environment variables
    schema:{
      SHOW_BUY_BUTTON: envField.boolean({ default: true, context: 'server', access: 'public' }), // Accesible en el cliente y en el servidor
      SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public' })
    }
  },

  adapter: vercel()
})