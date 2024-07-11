<template>
  <label class="field-label">
    <span class="field-label__title">{{ title }}</span>

    <VeeField
      v-if="inputType === 'tel'"
      class="field-label__input"
      v-model="inputText"
      v-phone
      :type="inputType"
      :name="inputName"
      :value="inputValue"
      :placeholder="inputPlaceholder"
    />

    <VeeField
      v-else
      class="field-label__input"
      v-model="inputText"
      :type="inputType"
      :name="inputName"
      :value="inputValue"
      :placeholder="inputPlaceholder"
    />

    <VeeErrorMessage 
      :name="inputName" 
      class="field-label__error-message"
    />
  </label>
</template>

<script setup>
  const inputText = ref("");

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

  const inputValue = computed(() => props.data.input.value || "");

  const inputPlaceholder = computed(() => props.data.input.placeholder || "");
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