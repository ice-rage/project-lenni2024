<template>
  <VeeField
    as="textarea"
    v-model="inputText" 
    name="wishes" 
    class="field__textarea">
  </VeeField>
</template>

<script setup>
  const inputText = ref("");
</script>

<style lang="less"></style>