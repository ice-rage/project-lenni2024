<template>
  <VueSelect 
    v-if="eventVisitors.length" 
    v-model="value"
    class="field__select"
    name="visitors"
    :placeholder="value"
    :options="eventVisitors"
    :isClearable="false"
    :isSearchable="false"
  />
</template>

<script setup>
  import eventVisitors from "~/data/eventPp/visitors.json";
  import VueSelect from "vue3-select-component";
  import { useField } from "vee-validate";

  const { value } = useField(() => "visitors");

  onMounted(() => {
    document
    .querySelector(".search-input")
    .setAttribute("readonly", true);

    value.value = eventVisitors[0].label;
  });
</script>

<style lang="less"></style>