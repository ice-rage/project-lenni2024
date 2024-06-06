<template>
  <VueSelect 
    v-if="visitorAmounts.length" 
    v-model="value"
    class="field__select"
    name="visitorAmount"
    :placeholder="value"
    :options="visitorAmounts"
    :isClearable="false"
    :isSearchable="false"
  />
</template>

<script setup>
  import VueSelect from "vue3-select-component";
  import { useField } from "vee-validate";
  import visitorAmounts from "~/data/visitorAmounts.json";

  const { value } = useField(() => "visitorAmount");

  onMounted(() => {
    document
    .querySelector(".search-input")
    .setAttribute("readonly", true);

    value.value = visitorAmounts[0].label;
  });
</script>

<style lang="less"></style>