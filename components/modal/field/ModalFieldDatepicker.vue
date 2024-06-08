<template>
  <div class="field-datepicker">
    <div class="field-datepicker__inputs">
      <input 
        v-model="selectedDate.day" 
        class="field-datepicker__input" 
        type="text"
        name="day" 
        placeholder="ДД" 
        readonly
      />

      <input 
        v-model="selectedDate.month" 
        class="field-datepicker__input" 
        type="text" 
        name="month"
        placeholder="ММ" 
        readonly
      />

      <input
        v-model="selectedDate.year"
        class="field-datepicker__input field__input--year"
        type="text"
        name="year"
        placeholder="ГГГГ"
        readonly
      />
    </div>

    <VeeField
      id="datepicker"
      v-model="selectedDate"
      class="field-datepicker__datepicker"
      type="text"
      name="date"
      readonly
    />

    <VeeErrorMessage 
      name="date" 
      class="field-datepicker__error-message"
    />
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

<style lang="less">
  .field-datepicker {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 251px;
    width: 100%;

    &__inputs {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      pointer-events: none;
    }

    &__input {
      display: block;
      box-sizing: border-box;
      width: 55px;
      height: 55px;
      margin-right: 15px;
      padding: 0 5px;
      border: 0;
      border-radius: 5px;
      font-size: 16px;
      line-height: 1.375;
      text-align: center;
      pointer-events: none;

      &--year {
        flex-grow: 1;
        margin-right: 0;
      }
    }

    &__datepicker {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 55px;
      max-width: 250px;
      border: 0;
      border-radius: 5px;
      opacity: 0;
      cursor: pointer;
    }

    &__error-message {
      .error-message();
    }
  }
</style>