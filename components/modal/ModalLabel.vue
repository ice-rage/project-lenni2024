<template>
  <label class="field">
    <span class="field__title">{{ label }}</span>
    <MaskInput
      v-if="inputType === 'tel'"
      class="field__input"
      :type="inputType"
      :name="inputName"
      :placeholder="inputPlaceholder"
      mask="+7 (###) ### ## ##"
      required
    />

    <input
      v-else
      class="field__input"
      :type="inputType"
      :name="inputName"
      :placeholder="inputPlaceholder"
      required
    />
  </label>
</template>

<script setup>
  import { MaskInput } from "vue-3-mask";

  const { data } = defineProps({
    data: {
      type: Object,
      default: () => {},
      required: true,
    },
  });

  const label = computed(() => data.label || "");

  const inputType = computed(() => data.input.type || "text");

  const inputName = computed(() => data.input.name || "unknown");

  const inputPlaceholder = computed(() => data.input.placeholder || undefined);
</script>

<style lang="less"></style>