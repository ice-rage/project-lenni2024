<template>
  <label class="field">
    <span class="field__title">{{ title }}</span>

    <VeeField
      v-if="inputType === 'tel'"
      class="field__input"
      v-model="inputText"
      v-phone
      :type="inputType"
      :name="inputName"
      :value="inputValue"
      :placeholder="inputPlaceholder"
    />

    <VeeField
      v-else
      class="field__input"
      v-model="inputText"
      :type="inputType"
      :name="inputName"
      :value="inputValue"
      :placeholder="inputPlaceholder"
    />

    <VeeErrorMessage :name="inputName" class="field__error-message"/>
  </label>
</template>

<script setup>
  const inputText = ref("");

  const props = defineProps({
    data: {
      type: Object,
      default: () => {},
      required: true,
    },
  });

  const title = computed(() => props.data.title || "");

  const inputType = computed(() => props.data.input.type || "text");

  const inputName = computed(() => props.data.input.name || "unknown");

  const inputValue = computed(() => props.data.input.value || "");

  const inputPlaceholder = computed(() => props.data.input.placeholder || "");
</script>

<style lang="less"></style>