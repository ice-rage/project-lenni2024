<template>
  <label class="field-label">
    <span class="field-label__title">{{ title }}</span>

    <input
      v-if="inputType === 'tel'"
      class="field-label__input"
      v-model="inputText"
      v-phone
      :type="inputType"
      :name="inputName"
      :placeholder="inputPlaceholder"
    />

    <input
      v-else
      class="field-label__input"
      v-model="inputText"
      :type="inputType"
      :name="inputName"
      :placeholder="inputPlaceholder"
    />

    <span class="field-label__error-message">
      {{ errorMessage }}
    </span>
  </label>
</template>

<script setup>
  import { useField } from "vee-validate";

  const props = defineProps({
    data: {
      type: Object,
      default: () => {},
      required: true,
    },
  });

  const title = computed(() => props.data.title || "");

  const inputType = computed(() => props.data.input.type || "text");

  const inputName = computed(() => props.data.input.name || "unknown");

  const inputPlaceholder = computed(() => 
    props.data.input.placeholder || "");

  const { value: inputText, errorMessage } = useField(() => 
    inputName.value);
</script>

<style lang="less">
  .field-label {
    &__title {
      display: block;
      margin-bottom: 5px;
    }

    &__input {
      box-sizing: border-box;
      width: 100%;
      height: 55px;
      border: none;
      border-radius: 5px;
      padding: 17px 20px 16px;
      background-color: @white;
      color: @black;
    }

    &__error-message {
      .error-message();
    }
  }
</style>