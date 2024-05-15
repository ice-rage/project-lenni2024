<template>
  <div id="app" class="app">
    <Body 
      class="app__body body" 
      :class="{ 'body--no-scrolling': store.isModalActive }"
    >
      <PageHeader class="app__page-header"/>

      <main class="app__main main">
        <NuxtPage/>
      </main>
    
      <PageFooter class="app__page-footer"/>
      
      <ModalPp/>
    </Body>
  </div>
</template>

<script setup>
  import { useStore } from "./store";

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
  });
</script>