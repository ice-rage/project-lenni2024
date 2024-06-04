<template>
  <VueSelect 
    v-if="selectOptions.length" 
    class="field__select select"
    v-model="selected" 
    placeholder=""
    :options="selectOptions"
    :isClearable="false"
    :isSearchable="false"
  />
</template>

<script setup>
  import VueSelect from "vue3-select-component";

  const selected = ref("");
  
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

  onMounted(() => document
    .querySelector(".search-input")
    .setAttribute("readonly", true));
</script>

<style lang="less"></style>