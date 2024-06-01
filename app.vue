<template>
  <div id="app" class="app">
    <PageHeader class="app__page-header"/>

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
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [
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