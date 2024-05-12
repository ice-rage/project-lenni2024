import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: 
        "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
  },
  css: ["@/styles/styles.less"],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `
            @import "@/styles/variables.less";
            @import "@/styles/mixins.less";
          `,
        }
      },
    },
    plugins: [
      svgLoader(),
    ],
  },
  modules: [
    "@pinia/nuxt",
  ],
})
