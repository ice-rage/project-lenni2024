<template>
  <VueSelect 
    v-if="eventVisitorCount.length" 
    v-model="selectedVisitorCount"
    class="field-select"
    name="visitorCount"
    :placeholder="selectedVisitorCount"
    :options="eventVisitorCount"
    :isClearable="false"
    :isSearchable="false"
  />
</template>

<script setup>
  import eventVisitorCount from "~/data/eventPp/visitorCount.json";
  import VueSelect from "vue3-select-component";
  import { useField } from "vee-validate";

  const { value: selectedVisitorCount } = useField("visitorCount",
    undefined, {
      initialValue: eventVisitorCount[0].value,
    },
  );

  onMounted(() => {
    document
      .querySelector(".search-input")
      .setAttribute("readonly", true);
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