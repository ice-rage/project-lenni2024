<template>
  <article class="card-event">
    <a href="#" class="card-event__link">
      <picture class="card-event__picture">
        <source 
          media="(max-width: 649px)" 
          type="image/webp" 
          :srcset="img_webp">
        
        <source media="(max-width: 649px)" :srcset="img">

        <source 
          media="(max-width: 1169px)" 
          type="image/webp" 
          :srcset="img_1170vw_webp">
        
        <source media="(max-width: 1169px)" :srcset="img_1170vw">

        <source 
          media="(max-width: 1659px)" 
          type="image/webp" 
          :srcset="img_1660vw_webp">
        
        <source media="(max-width: 1659px)" :srcset="img_1660vw">
        
        <source type="image/webp" :srcset="img_webp">

        <img :src="img" :alt="alt" class="card-event__img">
      </picture>

      <h4 class="card-event__title">{{ title }}</h4>

      <p class="card-event__description">{{ description }}</p>

      <time :datetime="dateTime" class="card-event__time">{{ time }}</time>
    </a>
  </article>
</template>

<script setup>
  const { data } = defineProps({
    data: {
      type: Object,
      default: () => {},
      required: true,
    },
  });

  const img_webp = computed(() => data.img_webp || "");

  const img = computed(() => data.img);

  const img_1170vw_webp = computed(() => data.img_1170vw_webp || "");

  const img_1170vw = computed(() => data.img_1170vw || "");

  const img_1660vw = computed(() => data.img_1660vw || "");

  const img_1660vw_webp = computed(() => data.img_1660vw_webp || "");

  const alt = computed(() => data.alt || "");

  const title = computed(() => data.title || "");

  const description = computed(() => data.description || "");

  const dateTime = computed(() => data.dateTime || "");

  const time = computed(() => data.time || "");
</script>

<style lang="less">
  .card-event {
    display: flex;
    max-width: 405px;
    min-width: 280px;

    @media @bw768 {
      min-height: 491px;
    }
    
    &__link {
      display: flex;
      flex-direction: column;
      width: 100%;
      color: @black;

      &:hover {
        @media(hover: hover) {
          .card-event__title {
            color: @red_BC;
            text-decoration-color: @red_BC;
          }
        }
      }
    }
    
    &__picture {
      .responsive-parent(@after-pt: 107.16%);

      margin: 0 0 25px;
      font-size: 0;
      overflow: hidden;

      @media @bw1660 {
        .responsive-parent(@after-pt: 110.43%);

        margin: 0 0 20px;
      }

      @media @bw1340 {
        .responsive-parent(@after-pt: 107.16%);

        margin: 0 0 25px;
      }
    }
    
    &__img {
      .responsive-child();
    }
    
    &__title {
      min-height: 64px;
      margin: 0 0 15px;
      color: @black;
      font-weight: 700;
      font-size: 24px;
      text-decoration: underline;
      text-decoration-color: transparent;
      transition: color 0.2s, text-decoration-color 0.2s;

      @media @bw1660 {
        margin: 0 0 8px;
      }

      @media @bw1340 {
        min-height: 54px;
        margin: 0 0 10px;
        font-size: 20px;
      }

      @media @bw650 {
        min-height: 50px;
        font-size: 16px;
      }
    }
    
    &__description {
      margin: 0 0 auto;
      font-size: 16px;

      @media @bw1340 {
        min-height: 92px;
      }

      @media @bw650 {
        min-height: auto;
        font-size: 14px;
      }
    }
    
    &__time {
      margin: 15px 0 0;
      font-weight: 300;
      font-size: 14px;

      @media @bw1660 {
        margin: 8px 0 0;
      }

      @media @bw1340 {
        margin: 10px 0 0;
      }
    }
  }
</style>