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
    />

    <VeeField
      v-else
      class="field__input"
      v-model="inputText"
      :name="input.name"
      :type="input.type"
      :value="input.value"
      :placeholder="input.placeholder"
    />

    <VeeErrorMessage :name="input.name" class="field__error-message"/>
  </label>
</template>

<script setup>
  const inputText = ref("");

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
</script>

<style lang="less"></style>