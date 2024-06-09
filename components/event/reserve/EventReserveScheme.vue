<template>
  <section class="reserve-scheme">
    <div class="reserve-scheme__container">
      <h4 class="reserve-scheme__title">Сцена</h4>

      <div class="reserve-scheme__wrapper">
        <EventReserveScene class="reserve-scheme__scene" :selectedTable="checkedCheckbox"/>
      </div>
    </div>
  </section>
</template>

<script setup>
  const { checkedCheckbox } = defineProps({
    checkedCheckbox: {
      type: Boolean,
      default: false,
      required: true,
    },
  });
</script>

<style lang="less">
  .reserve-scene {
    &__title {
      display: inline-block;
      padding: 6px 56px;
      font-weight: 600;
      background-color: @black;
      color: @white;

      @media @bw1020 {
        padding: 6px 47px;
        font-size: 11px;
      }
    }

    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }

    &__wrapper {
      .responsive-parent(@after-pt: 51.15384%);
    }

    &__scene {
      .responsive-child();
    }
  }
</style>