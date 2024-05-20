<template>
  <section class="upcoming">
    <div class="upcoming__wrapper" id="js-upcoming-wrapper">
      <div class="upcoming__container">
        <h2 class="upcoming__title section-title" id="upcoming">Мероприятия</h2>

        <swiper-container 
          ref="swiperElement"
          class="upcoming__swiper swiper swiper--3s"
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
              ref="prevArrow"
              class="swiper-arrow-prev arrow arrow--left"
              :class="isPrevArrowActive ? '' : 'arrow--disabled'"
              @click="toPrevSlide"
            >
              <SvgIcon class="arrow__icon" name="arrow" width="91" height="60"/>
            </button>

            <button 
              ref="nextArrow"
              class="swiper-arrow-next arrow"
              :class="isNextArrowActive ? '' : 'arrow--disabled'"
              @click="toNextSlide"
            >
              <SvgIcon class="arrow__icon" name="arrow" width="91" height="60"/>
            </button>
          </footer>
        </swiper-container>

        <a href="#" class="upcoming__link link">Смотреть все</a>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { register } from "swiper/element/bundle";

  import cards from "~/data/eventCards.json";

  const swiperElement = ref();

  const prevArrow = ref();
  const nextArrow = ref();

  const swiper = computed(() => swiperElement.value 
    ? swiperElement.value.swiper
    : null);

  const isPrevArrowActive = ref(false);
  const isNextArrowActive = ref(true);

  const onSlideChange = () => {
    isPrevArrowActive.value = !swiper.value.isBeginning;
    isNextArrowActive.value = !swiper.value.isEnd;
  };
  
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
    register();

    Object.assign(swiperElement.value, swiperParameters);

    swiperElement.value.initialize();
  });

  // const onSlideChange = () => {
  //   if (swiper.value !== null) {
  //     isPrevActive.value = !swiper.value.isBeginning;
  //     isNextActive.value = !swiper.value.isEnd;
  //   }
  // }

  const toPrevSlide = () => swiper.value.slidePrev();

  const toNextSlide = () => swiper.value.slideNext();
</script>

<style lang="less">
  .upcoming {
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
      @media @bw1020 {
        margin-left: calc(50% - 298px);
      }

      @media @bw768 {
        margin-left: calc(50% - 293px);
      }

      @media @bw650 {
        margin-left: calc(50% - 150px);
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