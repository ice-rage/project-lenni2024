<template>
  <div v-if="dateInputs" class="field__date">
    <div class="field__date-inputs">
      <input 
        v-for="(dateInputValue, dateInputKey) in dateInputs"
        :key="dateInputKey"
        :name="dateInputKey"
        type="text"
        readonly
        v-model="dateInputValue.value"
        class="field__date-input"
        :class="{'field__date-input--year' : dateInputKey === 'year'}"
        :placeholder="dateInputValue.placeholder"
      />
    </div>

    <input
      ref="datepicker"
      class="field__date-picker"
      name="datepicker"
      type="text"
      readonly
      required
    />
  </div>
</template>

<script setup>
  import { useDatepicker } from "vue-air-datepicker";

  const datepicker = ref();

  const datepickerConfing = {
    autoClose: true,
    minDate: new Date(),
    navTitles: {
      days: "MMMM <i>yyyy</i>",
    },
    onSelect: ({ date }) => {
      dateInputs.day.value = date 
        ? ("0" + date.getDate()).slice(-2) 
        : "";

      dateInputs.month.value = date 
        ? ("0" + (date.getMonth() + 1)).slice(-2) 
        : "";

      dateInputs.year.value = date 
        ? date.getFullYear() 
        : "";
    },
  };

  useDatepicker(datepicker, datepickerConfing);

  const dateInputs = {
    day: reactive({
      placeholder: "ДД",
      value: "",
    }),
    month: reactive({
      placeholder: "ММ",
      value: "",
    }),
    year: reactive({
      placeholder: "ГГГГ",
      value: "",
    }),
  };
</script>

<style lang="less"></style>