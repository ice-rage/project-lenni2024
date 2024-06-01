<template>
  <section class="offers">
    <h2 class="offers__title">Я хочу:</h2>

    <div class="offers__btns">
      <button
        type="button"
        class="offers__event-btn btn"
        @click="openEventPp"
      >
        Провести мероприятие
      </button>
      <button type="button" class="offers__rent-btn btn">
        Стать арендатором
      </button>
    </div>
  </section>
</template>

<script setup>
  const store = useStore();

  const { openEventPp } = store;
</script>

<style lang="less">
  .offers {
    .width_624();

    display: flex;
    flex-direction: column;
    gap: 46px;
    margin: 0 auto;

    @media @bw1340 {
      gap: 42px;
      max-width: 566px;
    }

    @media @bw768 {
      gap: 25px;
      min-width: 280px;
    }

    &__title {
      margin: 0 41% 0 44%;
      font-family: @font2;
      font-weight: 400;
      font-size: 22px;
      line-height: 1.364;
      letter-spacing: 0.02em;
      text-transform: uppercase;

      @media @bw1340 {
        margin: 0 auto;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.28;
        letter-spacing: 0;
      }

      @media @bw650 {
        font-weight: 400;
        font-size: 13px;
        line-height: 1.308;
        letter-spacing: 0.02em;
      }
    }

    &__btns {
      display: flex;
      justify-content: space-between;
      width: 100%;

      @media @bw768 {
        gap: 25px;
        flex-direction: column-reverse;
      }
    }

    &__event-btn {
      max-width: 272px;
      border: none;
      background-color: @red_BC;
      color: @white;
    }

    &__event-btn,
    &__rent-btn {
      @media @bw768 {
        max-width: 100%;
        padding: 15px 30px;
      }
    }

    &__rent-btn {
      width: 39.404%;
      min-width: 238px;
      padding: 15px 43px;

      @media @bw1660 {
        padding: 15px 39px;
      }

      @media @bw768 {
        width: 100%;
      }
    }
  }
</style>
