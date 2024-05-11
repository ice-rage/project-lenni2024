import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  head: {
    charset: "utf-8",
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
})
