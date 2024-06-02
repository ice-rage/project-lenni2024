<template>
  <section class="home-upcoming">
    <div class="home-upcoming__wrapper">
      <div class="home-upcoming__container">
        <h2 class="home-upcoming__title section-title">Мероприятия</h2>

        <swiper-container 
          ref="swiperElement"
          class="home-upcoming__swiper swiper swiper--3s"
          init="false"
          @swiperslidechange="onSlideChange"
        >
          <swiper-slide 
            v-for="(card, cardIndex) in cards" 
            :key="cardIndex"
            class="swiper-slide"
          >
            <CardEvent :data="card"/>
          </swiper-slide>

          <footer slot="container-end" class="swiper-footer">
            <button
              class="swiper-arrow-prev arrow arrow--left"
              :class="store.swiper.isBeginning ? 'arrow--disabled' : ''"
              @click="toPrevSlide"
            >
              <SvgIcon class="arrow__icon" name="arrow" width="91" height="60"/>
            </button>

            <button
              class="swiper-arrow-next arrow"
              :class="store.swiper.isEnd ? 'arrow--disabled' : ''"
              @click="toNextSlide"
            >
              <SvgIcon class="arrow__icon" name="arrow" width="91" height="60"/>
            </button>
          </footer>
        </swiper-container>

        <a href="#" class="home-upcoming__link link">Смотреть все</a>
      </div>
    </div>
  </section>
</template>

<script setup>
  import cards from "~/data/eventCards.json";
  import "swiper/css";

  const store = useStore();

  const { 
    registerSwiper, 
    onSlideChange, 
    toPrevSlide, 
    toNextSlide } = store;

  const swiperElement = ref();
  
  const swiperParameters = {
    updateOnWindowsResize: true,
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 0,
    speed: 500,
    pagination: {
      type: "bullets",
      clickable: true,
      hideOnClick: false,
    },
  };

  onMounted(() => {
    registerSwiper(swiperElement, swiperParameters);
  });
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
        padding: 50px 0 40px 0;
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

      @media @bw1020 {
        padding-right: 0;
      }

      @media @bw768 {
        padding-right: 0;
      }
    }

    &__title {
      @media @bw650 {
        margin-left: 0;
      }
    }

    &__link {
      align-self: flex-end;
      padding: 15px 0 15px 40px;

      @media @bw1340 {
        margin-right: 30px;
      }

      @media @bw768 {
        margin-right: 20px;
        padding-left: 20px;
      }
    }
  }
</style>