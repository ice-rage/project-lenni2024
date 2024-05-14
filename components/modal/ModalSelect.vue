<template>
  <select 
    v-if="options.length" 
    name="amount" 
    class="field__select js-selectric"
  >
    <option 
      v-for="(option, optionIndex) in options" 
      :key="optionIndex"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script setup>
  const options = [
    {
      value: "20",
      label: "до 20 человек",
    },
    {
      value: "100",
      label: "от 20 до 100 человек",
    },
    {
      value: "500",
      label: "от 100 до 500 человек",
    },
    {
      value: "1000",
      label: "более 500 человек",
    },
  ];
</script>

<style lang="less"></style>