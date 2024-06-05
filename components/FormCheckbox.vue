<template>
  <label class="check">
    <span class="check__label check__label--fsz14" :class="labelClass">
      {{ label }}
    </span>
            
    <VeeField
      v-model="checked"
      type="checkbox"
      name="agreement"
      :value="checked"
      :uncheckedValue="false"
      class="check__input"
      @change="detectChanges"
    />

    <VeeErrorMessage name="agreement" class="error-message"/>

    <span class="check__mark"></span>
  </label>
</template>

<script setup>
  const { label } = defineProps({
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

  const checked = ref(true);

  const detectChanges = () => console.log("Value changed: ", 
    checked.value);
</script>

<style lang="less"></style>