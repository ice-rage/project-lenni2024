<template>
  <label class="checkbox">
    <span 
      class="checkbox__label checkbox__label--fsz14" 
      :class="labelClass"
    >
      {{ label }}
    </span>
            
    <input
      v-model="checked"
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

  const { label, labelClass, errorMessage } = defineProps({
    label: {
      type: String,
      default: "",
      required: true,
    },
    labelClass: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
  });

  const { value: checked } = useField("agreement");

  onMounted(() => checked.value = true);
</script>

<style lang="less"></style>