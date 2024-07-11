import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  app: {
    pageTransition: false,
    layoutTransition: false,
    head: {
      charset: "utf-8",
      viewport: 
        "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("swiper-"),
    },
  },
  css: ["~/styles/styles.less"],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `
            @import "~/styles/variables.less";
            @import "~/styles/mixins.less";
          `,
        }
      },
    },
    plugins: [
      svgLoader(),
    ],
  },
  modules: [
    "sgx-nuxt-breadcrumbs",
    "@vee-validate/nuxt",
    "vue-yandex-maps/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          "defineStore",
          ["defineStore", "definePiniaStore"],
        ],
      },
    ],
  ],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  yandexMaps: {
    apikey: "664ae998-4da0-4bbe-9d13-109fe362cc4e",
  },
});