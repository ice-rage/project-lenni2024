<template>
  <label 
    class="checkbox" 
    :class="{ 'checkbox--red' : red, 'checkbox--disabled' : disabled }"
  >
    <span class="checkbox__label">
      {{ label }}
    </span>
            
    <input
      v-model="checked"
      type="checkbox"
      :name="id"
      class="checkbox__input"
      @change="toggleReserveItemState('tables', id)"
    />

    <span class="checkbox__mark"></span>
  </label>
</template>

<script setup>
  const store = useStore();

  const { red, disabled, label, id } = defineProps({
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

  const checked = store.getReserveItemState("checkboxes", id);
</script>

<style lang="less"></style>