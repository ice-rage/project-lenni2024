<template>
  <article class="card-article">
    <a href="#" class="card-article__link">
      <picture class="card-article__picture">
        <source 
          media="(max-width: 449px)" 
          type="image/webp" 
          :srcset="img_webp">
        
        <source media="(max-width: 449px)" :srcset="img">

        <source 
          media="(max-width: 1169px)" 
          type="image/webp" 
          :srcset="img_1170vw_webp">
        
        <source media="(max-width: 1169px)" :srcset="img_1170vw">

        <source type="image/webp" :srcset="img_webp">

        <img :src="img" :alt="alt" class="card-article__img">
      </picture>
    </a>

    <div class="card-article__info">
      <time :datetime="dateTime" class="card-article__time">{{ time }}</time>

      <a href="#" class="card-article__title-link">
        <h4 class="card-article__title">{{ title }}</h4>

        <ArrowPlain class="card-article__arrow-plain"/>
      </a>

      <p class="card-article__description">{{ description }}</p>
    </div>
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

  const alt = computed(() => data.alt || "");

  const dateTime = computed(() => data.dateTime || "");

  const time = computed(() => data.time || "");

  const title = computed(() => data.title || "");

  const description = computed(() => data.description || "");
</script>

<style lang="less">
  .card-article {
    position: relative;
    box-sizing: border-box;
    display: flex;
    width: 100%;

    @media @bw1170 {
      flex-direction: column;
    }

    & + .card-article {
      margin-top: 120px;

      @media @bw1660 {
        margin-top: 110px;
      }

      @media @bw1340 {
        margin-top: 100px;
      }

      @media @bw768 {
        margin-top: 80px;
      }

      &::before {
        content: "";
        position: absolute;
        display: block;
        margin: 0 auto 60px;
        left: 0;
        right: 0;
        bottom: 100%;
        width: 100%;
        max-width: 1257px;
        height: 1px;
        background-color: @black;
        pointer-events: none;

        @media @bw1660 {
          margin-bottom: 50px;
        }

        @media @bw768 {
          margin-bottom: 40px;
        }
      }
    }

    &:hover {
      @media(hover: hover) {
        .card-article__picture {
          box-shadow: 0 0 30px fade(@black, 55%);
        }
      }
    }

    &__link {
      flex-shrink: 0;
      align-self: flex-start;
      display: block;
      width: 467px;
      margin-right: 60px;
      font-size: 0;
      text-decoration: none;

      @media @bw1170 {
        width: 100%;
        margin-right: 0;
      }

      &:hover {
        @media(hover: hover) {
          & ~ .card-article__info {
            .card-article__title-link {
              color: @red_BC;
              text-decoration-color: @red_BC;
            }
          }
        }
      }
    }

    &__picture {
      .responsive-parent(@after-pt: 62.3126%);

      transition: box-shadow 0.2s;

      @media @bw1020 {
        .responsive-parent(@after-pt: 62%);
      }

      @media @bw768 {
        .responsive-parent(@after-pt: 62.5%);
      }
    }

    &__img {
      .responsive-child();
    }

    &__info {
      position: relative;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 30px 271px 30px 0;

      @media @bw1660 {
        padding-right: 197px;
      }

      @media @bw1170 {
        padding: 26px 171px 0 0;
      }

      @media @bw768 {
        padding: 10px 0 60px;
      }
    }

    &__time {
      margin: 0 0 40px;
      font-weight: 300;
      font-size: 16px;

      @media @bw768 {
        margin-bottom: 20px;
        font-size: 14px;
      }
    }

    &__title-link,
    &__description {
      max-width: 470px;

      @media @bw1170 {
        max-width: 100%;
      }
    }

    &__title-link {
      margin: auto 0 40px;
      color: @black;
      text-decoration: underline;
      text-decoration-color: transparent;
      transition: color 0.2s, text-decoration-color 0.2s;

      @media @bw1170 {
        margin: auto 0 20px;
      }

      @media @bw768 {
        margin-bottom: 10px;
      }

      &:hover {
        @media(hover: hover) {
          color: @red_A5;
          text-decoration-color: @red_A5;
        }
      }
    }

    &__title {
      margin: 0;
      color: inherit;
      font-weight: 600;
      font-size: 24px;

      @media @bw1660 {
        font-weight: 700;
      }

      @media @bw1170 {
        font-weight: 600;
        font-size: 20px;
      }

      @media @bw768 {
        font-weight: 700;
        font-size: 16px;
      }
    }

    &__arrow-plain {
      position: absolute;
      right: 0;
      bottom: 30px;
      color: inherit;
      transition: none;

      @media @bw1170 {
        bottom: 0;
      }
    }

    &__description {
      margin: 0;
      font-size: 16px;

      @media @bw768 {
        font-size: 14px;
      }
    }
  }
</style>