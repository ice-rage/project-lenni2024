<template>
  <section class="reserve-checkboxes">
    <h4 class="reserve-checkboxes__section-title">Забронировать столик</h4>

    <div class="reserve-checkboxes__wrapper">
      <EventReserveCheckbox
        v-for="checkbox in store.getReserveItems['checkboxes']"
        :key="checkbox.id"
        :red="checkbox.red"
        :disabled="checkbox.disabled"
        :label="`${checkbox.id} стол`"
        :id="checkbox.id"
        class="reserve-checkboxes__checkbox"
      />
    </div>
  </section>
</template>

<script setup>
  const store = useStore();
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

    &__checkbox > .checkbox__label {
      @media @bw450 {
        font-size: 14px;
      }
    }
  }
</style>