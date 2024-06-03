<template>
  <VueSelect 
    v-if="selectOptions.length" 
    class="field__select select"
    v-model="selected" 
    placeholder=""
    :options="selectOptions"
    :isClearable="false"
  />
</template>

<script setup>
  import "vue3-select-component/dist/style.css";

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
</script>

<style lang="less">
  .select {
   
    .control {
      border: none;
      width: 100%; 
      padding: 0 15px;
    }

    .dropdown-icon {
      width: 24px;
      height: 24px;
    }

    .menu {
      margin-top: 47px;
    }
  }
</style>