<template>
  <label class="field">
    <span class="field__title">{{ label }}</span>
    <input
      :class="`field__input ${jsClass}`"
      :type="inputType"
      :name="inputName"
      :placeholder="inputPlaceholder"
      required
    />
  </label>
</template>

<script setup>
  const { data } = defineProps({
    data: {
      type: Object,
      default: () => {},
      required: true,
    }
  });

  const label = computed(() => data.label || "");

  const jsClass = computed(() => data.jsClass || "");

  const inputType = computed(() => data.inputType || "text");

  const inputName = computed(() => data.inputName || "unknown");

  const inputPlaceholder = computed(() => data.inputPlaceholder || undefined);
</script>

<style lang="less"></style>