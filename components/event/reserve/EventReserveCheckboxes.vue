<template>
  <section class="reserve-checkboxes">
    <h4 class="reserve-checkboxes__section-title">Забронировать столик</h4>

    <div class="reserve-checkboxes__wrapper">
      <FormCheckbox
        v-for="checkbox in checkboxes"
        :key="checkbox.id"
        :label="`${checkbox.id} стол`"
        :red="checkbox.red"
        :disabled="checkbox.disabled"
        :initialValue="checkbox.checked"
        class="reserve-checkboxes__checkbox"
      />
    </div>
  </section>
</template>

<script setup>
    const checkboxes = [
    {
      id: 1,
      red: true,
      disabled: false,
      checked: false,
    },
    {
      id: 2,
      red: false,
      disabled: false,
      checked: false,
    },
    {
      id: 3,
      red: false,
      disabled: false,
      checked: false,
    },
    {
      id: 4,
      red: true,
      disabled: false,
      checked: false,
    },
    {
      id: 5,
      red: false,
      disabled: true,
      checked: false,
    },
    {
      id: 6,
      red: false,
      disabled: false,
      checked: false,
    },
    {
      id: 7,
      red: true,
      disabled: false,
      checked: false,
    },
    {
      id: 8,
      red: true,
      disabled: false,
      checked: false,
    },
    {
      id: 9,
      red: true,
      disabled: false,
      checked: false,
    },
    {
      id: 10,
      red: false,
      disabled: false,
      checked: false,
    },
    {
      id: 11,
      red: false,
      disabled: false,
      checked: false,
    },
  ];
</script>

<style lang="less">
  .reserve-checkboxes {
    max-width: 218px;

    @media @bw1020 {
      max-width: 192px;
    }
    
    &__section-title {
      .reserve-section-title();
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      margin-top: 30px;

      @media @bw1020 {
        gap: 15px;
        margin-top: 0;
      }
    }

    &__checkbox > .form-checkbox__label {
      @media @bw450 {
        font-size: 14px;
      }
    }
  }
</style>