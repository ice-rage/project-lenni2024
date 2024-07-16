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
      v-model="checked"
      type="checkbox"
      :name="id"
      class="checkbox__input"
      @change="toggleReserveItemState('tables', props.id)"
    />

    <span class="checkbox__mark"></span>
  </label>
</template>

<script setup>
  const store = useMainStore();

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

  const { toggleReserveItemState } = store;

  const checked = store.getReserveItemState("checkboxes", 
    props.id);
</script>

<style lang="less"></style>