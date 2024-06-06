<template>
  <VueSelect 
    v-if="eventVisitors.length" 
    v-model="value"
    class="field-select"
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

<style lang="less">
  .field-select {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 55px;
    border: none;
    border-radius: 5px;
    background-color: @white;
    color: @black;
  }
</style>