<template>
  <label 
    class="checkbox" 
    :class="{ 
      'checkbox--red' : props.red, 
      'checkbox--disabled' : props.disabled 
    }"
  >
    <span class="checkbox__label">
      {{ props.label }}
    </span>
            
    <input
      v-model="isChecked"
      type="checkbox"
      :name="props.id"
      class="checkbox__input"
    />

    <span class="checkbox__mark"></span>
  </label>
</template>

<script setup>
  const props = defineProps({
    red: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
      required: true,
    },
    id: {
      type: Number,
      default: 0,
      required: true,
    },
  });

  const isChecked = defineModel();
</script>

<style lang="less"></style>