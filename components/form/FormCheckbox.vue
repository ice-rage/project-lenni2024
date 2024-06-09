<template>
  <label class="checkbox">
    <span 
      class="checkbox__label checkbox__label--fsz14" 
      :class="fontWeight == '300'
        ? 'checkbox__label--fw300' 
        : ''"
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
  const { label, fontWeight } = defineProps({
    label: {
      type: String,
      default: "",
      required: true,
    },
    fontWeight: {
      type: [String, Number],
      default: undefined,
    },
  });

  const checked = ref(true);

  const onChange = () => {
    console.log(checked.value);
  }
</script>

<style lang="less"></style>