<template>
  <VeeField
    as="textarea"
    v-model="inputText" 
    name="wishes" 
    class="field-textarea">
  </VeeField>
</template>

<script setup>
  const inputText = ref("");
</script>

<style lang="less">
  .field-textarea {
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-radius: 5px;
    height: 149px;
    padding: 17px 20px 16px;
    background-color: @white;
    color: @black;
    color: @black;
    font-family: @font1;
    font-size: 18px;

    @media @bw650 {
      margin-top: 10px;
      height: 234px;
      font-size: 16px;
    }
  }
</style>