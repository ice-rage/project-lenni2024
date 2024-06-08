<template>
  <div id="app" class="app">
    <PageHeader class="app__page-header"/>

    <PageBreadcrumbs class="app__page-breadcrumbs"/>

    <main class="app__main main">
      <NuxtPage/>
    </main>
    
    <PageFooter class="app__page-footer"/>
      
    <ModalPp class="app__modal-pp"/>
  </div>
</template>

<script setup>
  const store = useStore();

  useHead({
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
      },
      {
        name: "description",
        content: "Арт—пространство для людей, горящих сердцем и делом",
      },
      {
        name: "keywords",
        content: "Lenni Art, пространство, мероприятия",
      },
      {
        property: "og:title",
        content: "Lenni Art",
      },
      {
        property: "og:description",
        content: "Арт—пространство для людей, горящих сердцем и делом",
      },
      {
        property: "og:image",
        content: "/images/lenni.png",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://lenni-art.ru/",
      },
      {
        name: "msapplication-TileColor",
        content: "#ffffff",
      },
      {
        name: "msapplication-TileImage",
        content: "/favicons/mstile-144x144.png",
      },
      {
        name: "msapplication-Config",
        content: "/favicons/browserconfig.xml",
      },
      {
        name: "theme-color",
        content: "#ffffff",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [
      {
        rel: "shortcut icon",
        href: "/favicons/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png",
      },
      {
        ref: "mask-icon",
        href: "/favicons/safari-pinned-tab.svg",
        color: "#bc3324",
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/favicons/apple-touch-icon-60x60.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/favicons/apple-touch-icon-76x76.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/favicons/apple-touch-icon-120x120.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/favicons/apple-touch-icon-152x152.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons/apple-touch-icon-180x180.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/favicons/android-chrome-192x192.png",
      },
      {
        rel: "manifest",
        href: "/favicons/site.webmanifest",
      },
      {
        rel: "preconnect", 
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect", 
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
      {
        ref: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap",
      },
    ],
    bodyAttrs: {
      class: {
        body: true,
        "show-nav": () => store.isNavMenuActive,
        "show-event-pp": () => store.modal.isEventPpActive,
      },
    },
  });
</script>