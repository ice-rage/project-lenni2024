<template>
  <label class="checkbox">
    <span 
      class="checkbox__label checkbox__label--fsz14" 
      :class="props.labelClass"
    >
      {{ props.label }}
    </span>
            
    <input
      v-model="checkedValue"
      type="checkbox"
      name="agreement"
      :value="true"
      :uncheckedValue="false"
      class="checkbox__input"
    />

    <span class="error-message">{{ errorMessage }}</span>

    <span class="checkbox__mark"></span>
  </label>
</template>

<script setup>
  import { useField } from "vee-validate";

  const { value: checkedValue, errorMessage } =
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