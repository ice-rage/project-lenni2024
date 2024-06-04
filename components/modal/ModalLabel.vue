<template>
  <label class="field">
    <span class="field__title">{{ title }}</span>

    <MaskInput
      v-if="input.type === 'tel'"
      class="field__input"
      v-model="inputText"
      :name="input.name"
      :type="input.type"
      :value="input.value"
      :placeholder="input.placeholder"
      mask="+7 (###) ### ## ##"
      required
      @keyup="detectChanges"
    />

    <input
      v-else
      class="field__input"
      v-model="inputText"
      :name="input.name"
      :type="input.type"
      :value="input.value"
      :placeholder="input.placeholder"
      required
      @keyup="detectChanges"
    />
  </label>
</template>

<script setup>
  import { MaskInput } from "vue-3-mask";

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