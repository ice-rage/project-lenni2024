<template>
  <label class="checkbox">
    <span 
      class="checkbox__label checkbox__label--fsz14" 
      :class="labelClass"
    >
      {{ label }}
    </span>
            
    <VeeField
      v-model="checked"
      type="checkbox"
      name="agreement"
      :value="true"
      :uncheckedValue="false"
      class="checkbox__input"
      @change="onChange"
    />

    <VeeErrorMessage name="agreement" class="error-message"/>

    <span class="checkbox__mark"></span>
  </label>
</template>

<script setup>
  const { label, labelClass } = defineProps({
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

  const onChange = () => {
    console.log(checked.value);
  }
</script>

<style lang="less"></style>