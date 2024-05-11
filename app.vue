<template>
  <div id="app" class="app">
    <div class="app__body body">
      <PageHeader ref="page-header" class="app__page-header"/>

      <main class="app__main main">
        <NuxtPage/>
      </main>
    
      <PageFooter class="app__page-footer"/>
    </div>
  </div>
</template>

<script setup>
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