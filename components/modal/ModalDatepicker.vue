<template>
  <div v-if="dateInputs.length" class="field__date">
    <div class="field__date-inputs">
      <input 
        v-for="(dateInput, dateInputIndex) in dateInputs"
        :key="dateInputIndex"
        class="field__date-input"
        :class="
          dateInput.jsClass, 
          { 'field__date-input--year' : dateInput.jsClass === 'js-dateYear' }
        "
        type="text"
        :placeholder="dateInput.placeholder"
        readonly
      />
    </div>

    <input
      class="field__date-picker js-dateInput"
      type="text"
      name="date"
      readonly
      required
    />
  </div>
</template>

<script setup>
  const dateInputs = [
    {
      jsClass: "js-dateDay",
      placeholder: "ДД",
    },
    {
      jsClass: "js-dateMonth",
      placeholder: "ММ",
    },
    {
      jsClass: "js-dateYear",
      placeholder: "ГГГГ",
    },
  ];
</script>

<style lang="less"></style>