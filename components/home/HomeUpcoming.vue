<template>
  <section class="home-upcoming">
    <div class="home-upcoming__wrapper">
      <div class="home-upcoming__container">
        <h2 class="home-upcoming__title section-title">Мероприятия</h2>

        <CardSwiper 
          class="home-upcoming__swiper swiper--3s" 
          componentName="CardEvent"
          :cards="eventCards"
        />

        <LinkLabel class="home-upcoming__link link" label="Смотреть все"/>
      </div>
    </div>
  </section>
</template>

<script setup>
  import eventCards from "~/data/card/events.json";
</script>

<style lang="less">
  .home-upcoming {
    &__wrapper {
      padding: 120px 0 84px;
      background-image: url("/images/home-events.png");
      background-position: center;
      background-size: 100% 100%;
      background-repeat: no-repeat;

      @media @bw1660 {
        padding: 100px 0 77px;
      }

      @media @bw1340{
        padding: 80px 0 43px;
      }

      @media @bw768 {
        padding: 40px 0;
      }
    }

    &__style {
      display: flex;
      width: 100%;
    }

    &__container {
      .container();

      display: flex;
      flex-direction: column;
    }

    &__title {
      @media @bw650 {
        margin-left: 0;
      }
    }

    &__swiper {
      @media @bw768 {
        margin-bottom: 18px;
      }
    }

    &__link {
      align-self: flex-end;
    }
  }
</style>