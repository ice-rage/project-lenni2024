<template>
  <label class="checkbox">
    <span 
      class="checkbox__label checkbox__label--fsz14" 
      :class="props.labelClass"
    >
      {{ props.label }}
    </span>
            
    <input
      v-model="isChecked"
      type="checkbox"
      name="agreement"
      class="checkbox__input"
      :value="true"
      :uncheckedValue="false"
    />

    <span class="error-message">{{ errorMessage }}</span>

    <span class="checkbox__mark"></span>
  </label>
</template>

<script setup>
  import { useField } from "vee-validate";

  const { value: isChecked, errorMessage } =
    useField("agreement");

  const props = defineProps({
    label: {
      type: String,
      default: "",
      required: true,
    },
    labelClass: {
      type: String,
      default: "",
    },
  });
</script>

<style lang="less"></style>