<template>
  <textarea 
    class="field__textarea" 
    v-model="inputText"
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