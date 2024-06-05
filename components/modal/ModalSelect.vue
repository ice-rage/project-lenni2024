<template>
  <div class="field__select-wrapper">
    <VueSelect 
      v-if="selectOptions.length" 
      v-model="value"
      class="field__select"
      name="visitorAmount"
      :placeholder="value"
      :options="selectOptions"
      :isClearable="false"
      :isSearchable="false"
      @optionSelected="detectChanges"
    />

    <div class="field__error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
  import VueSelect from "vue3-select-component";
  import { useField } from "vee-validate";
  
  const selectOptions = [
    {
      label: "до 20 человек",
      value: "20",
    },
    {
      label: "от 20 до 100 человек",
      value: "100",
    },
    {
      label: "от 100 до 500 человек",
      value: "500",
    },
    {
      label: "более 500 человек",
      value: "1000",
    },
  ];

  const { value, errorMessage } = useField(() => "visitorAmount");

  onMounted(() => {
    document
    .querySelector(".search-input")
    .setAttribute("readonly", true);

    value.value = selectOptions[0].label;
  });

  const detectChanges = () => console.log("Value changed: ", 
    value.value);
</script>

<style lang="less"></style>