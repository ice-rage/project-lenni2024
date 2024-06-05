<template>
  <label class="field">
    <span class="field__title">{{ title }}</span>

    <VeeField
      v-if="input.type === 'tel'"
      class="field__input"
      v-model="inputText"
      v-phone
      :name="input.name"
      :type="input.type"
      :value="input.value"
      :placeholder="input.placeholder"
      @keyup="detectChanges"
    />

    <VeeField
      v-else
      class="field__input"
      v-model="inputText"
      :name="input.name"
      :type="input.type"
      :value="input.value"
      :placeholder="input.placeholder"
      @keyup="detectChanges"
    />

    <VeeErrorMessage :name="input.name" class="field__error-message"/>
  </label>
</template>

<script setup>
  const { title, input } = defineProps({
    title: {
      type: String,
      default: "",
      required: true,
    },
    input: {
      type: Object,
      default: () => {},
      required: true,
    },
  });

  const inputText = ref("");

  const detectChanges = () => console.log("Value changed: ", 
    inputText.value);
</script>

<style lang="less"></style>