<template>
  <div class="field__date">
    <div class="field__date-inputs">
      <input 
        v-model="selectedDate.day" 
        class="field__date-input" 
        type="text"
        name="day" 
        placeholder="ДД" 
        readonly
      />

      <input 
        v-model="selectedDate.month" 
        class="field__date-input" 
        type="text" 
        name="month"
        placeholder="ММ" 
        readonly
      />

      <input
        v-model="selectedDate.year"
        class="field__date-input field__date-input--year"
        type="text"
        name="year"
        placeholder="ГГГГ"
        readonly
      />
    </div>

    <VeeField
      id="datepicker"
      v-model="selectedDate"
      class="field__datepicker"
      type="text"
      name="date"
      readonly
    />

    <VeeErrorMessage name="date" class="field__error-message"/>
  </div>
</template>

<script setup>
  import { useDatepicker } from "vue-air-datepicker";
  
  const selectedDate = reactive({
    day: "",
    month: "",
    year: "",
  });

  const datepickerConfing = {
    autoClose: true,
    minDate: new Date(),
    navTitles: {
      days: "MMMM <i>yyyy</i>",
    },
    onSelect: ({ date }) => {
      selectedDate.day = date ? ("0" + date.getDate()).slice(-2) : "";

      selectedDate.month = date
        ? ("0" + (date.getMonth() + 1)).slice(-2)
        : "";

      selectedDate.year = date ? date.getFullYear() : "";
    },
  };

  useDatepicker("#datepicker", datepickerConfing);
</script>

<style lang="less"></style>