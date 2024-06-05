<template>
  <textarea 
    v-model="inputText"
    class="field__textarea"
    name="wishes" 
    @keyup="detectChanges">
  </textarea>
</template>

<script setup>
  const inputText = ref("");

  const detectChanges = () => console.log("Value changed: ", 
    inputText.value);
</script>

<style lang="less"></style>