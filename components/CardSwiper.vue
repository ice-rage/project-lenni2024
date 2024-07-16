<template>
  <swiper-container
    ref="swiperElement"
    class="swiper"
    init="false"
    @swiperslidechange="onSlideChange"
  >
    <swiper-slide
      v-for="(card, cardIndex) in props.cards"
      :key="cardIndex"
      class="swiper-slide"
    >
      <component 
        :is="cardComponent" 
        :data="card"
      ></component>
    </swiper-slide>

    <footer slot="container-end" class="swiper-footer">
      <LinkArrow
        class="swiper-arrow-prev"
        left
        :disabled="isBeginning"
        @click="toPrevSlide"
      />

      <LinkArrow
        class="swiper-arrow-next"
        :disabled="isEnd"
        @click="toNextSlide"
      />
    </footer>
  </swiper-container>
</template>

<script setup>
  import { register } from "swiper/element/bundle";

  const props = defineProps({
    componentName: {
      type: String,
      default: "",
      required: true,
    },
    cards: {
      type: Array,
      default: () => [],
      required: true,
    },
  });

  const cardComponent = props.componentName
    ? defineAsyncComponent(() => 
      import(`~/components/card/${props.componentName}.vue`)) 
    : null;

  const swiperElement = ref();
  const isBeginning = ref(true);
  const isEnd = ref(false);
  
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

  const swiper = computed(() => swiperElement.value.swiper);
  
  const onSlideChange = () => {
    isBeginning.value = swiper.value.isBeginning;
    isEnd.value = swiper.value.isEnd;
  }
  
  const toPrevSlide = () => swiper.value.slidePrev();
  
  const toNextSlide = () => swiper.value.slideNext();

  onMounted(() => {
    register();

    Object.assign(swiperElement.value, swiperParameters);

    swiperElement.value.initialize();
  });
</script>

<style lang="less">
  .swiper {
    &--3s {
      width: 100%;

      .swiper-slide {
        box-sizing: border-box;
        width: calc(33.3333% + 20px);
        min-width: 340px;
        padding-right: 60px;

        @media @bw1660 {
          width: calc(33.3333% + 13.3333px);
          min-width: 320px;
          padding-right: 40px;
        }

        @media @bw1340 {
          width: calc(33.3333% + 10px);
          min-width: 310px;
          padding-right: 30px;
        }

        @media @bw768 {
          width: calc(33.3333% + 6.6666px);
          min-width: 300px;
          padding-right: 20px;
        }

        &:last-of-type {
          width: calc(33.3333% - 40px);
          min-width: 280px;
          padding-right: 0;

          @media @bw1660 {
            width: calc(33.3333% - 26.6666px);
          }

          @media @bw1340 {
            width: calc(33.3333% - 20px);
          }

          @media @bw768 {
            width: calc(33.3333% - 13.3333px);
          }
        }

        & > * {
          width: 100%;
        }

        .card-event {
          &__link {
            cursor: pointer;
            cursor: grab;

            &:active {
              cursor: pointer;
              cursor: grabbing;
            }
          }

          &__title {
            cursor: pointer;

            @media @bw1340 {
              height: 50px;
              min-height: auto;
              font-size: 16px;
            }
          }

          &__description {
            @media @bw1340 {
              height: 76px;
              min-height: auto;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
</style>