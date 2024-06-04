<template>
  <div class="field__date">
    <div class="field__date-inputs">
      <input 
        v-model="selectedDate.day" 
        class="field__date-input" 
        type="text" 
        placeholder="ДД" 
        readonly
      />

      <input 
        v-model="selectedDate.month" 
        class="field__date-input" 
        type="text" 
        placeholder="ММ" 
        readonly
      />

      <input
        v-model="selectedDate.year"
        class="field__date-input field__date-input--year"
        type="text"
        placeholder="ГГГГ"
        readonly
      />
    </div>

    <input
      ref="datepicker"
      class="field__datepicker"
      type="text"
      name="date"
      readonly
      required
    />
  </div>
</template>

<script setup>
  import { useDatepicker } from "vue-air-datepicker";

  const datepicker = ref();
  
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

      detectChanges();
    },
  };

  useDatepicker(datepicker, datepickerConfing);

  const detectChanges = () => console.log("Value changed: ", selectedDate);
</script>

<style lang="less"></style>