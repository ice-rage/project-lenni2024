<template>
  <section class="home-about">
    <div class="home-about__container">
      <h2 class="home-about__section-title section-title" id="home-about">О нас</h2>

      <div class="home-about__first-block">
        <h3 class="home-about__title">Проект «Millennials»</h3>
        <p class="home-about__text home-about__text--mt50">
          Вдохновлен молодыми идейными людьми, увлеченными творчеством, эмоциями
          и желанием сделать мир лучше, проявить себя. У них есть талант и
          стремление, у нас возможность помочь им воплотить их мечту в
          реальность.
        </p>
      </div>

      <div class="home-about__second-block">
        <div class="home-about__first-picture-area">
          <picture class="home-about__first-picture">
            <source
              media="(max-width: 767px)"
              type="image/webp"
              srcset="/images/about1_708w.webp"
            />

            <source
              media="(max-width: 767px)"
              srcset="/images/about1_708w.jpg"
            />

            <source
              media="(max-width: 949px)"
              type="image/webp"
              srcset="/images/about1_870w.webp"
            />

            <source
              media="(max-width: 1169px)"
              type="image/webp"
              srcset="/images/about1_708w.webp"
            />

            <source
              media="(max-width: 1169px)"
              srcset="/images/about1_708w.jpg"
            />

            <source
              media="(max-width: 1339px)"
              type="image/webp"
              srcset="/images/about1_826w.webp"
            />

            <source
              media="(max-width: 1339px)"
              srcset="/images/about1_826w.jpg"
            />

            <source type="image/webp" srcset="/images/about1_870w.webp" />

            <img
              class="home-about__img"
              src="/images/about1_870w.jpg"
              alt="about1"
            />
          </picture>
        </div>

        <div class="home-about__second-picture-area">
          <picture class="home-about__second-picture">
            <source
              media="(max-width: 449px)"
              type="image/webp"
              srcset="/images/about2_262w.webp"
            />

            <source
              media="(max-width: 449px)"
              srcset="/images/about2_262w.jpg"
            />

            <source
              media="(max-width: 599px)"
              type="image/webp"
              srcset="/images/about2_393w.webp"
            />

            <source
              media="(max-width: 599px)"
              srcset="/images/about2_393w.jpg"
            />

            <source
              media="(max-width: 719px)"
              type="image/webp"
              srcset="/images/about2_404w.webp"
            />

            <source
              media="(max-width: 799px)"
              type="image/webp"
              srcset="/images/about2_262w.webp"
            />

            <source
              media="(max-width: 799px)"
              srcset="/images/about2_262w.jpg"
            />

            <source
              media="(max-width: 1339px)"
              type="image/webp"
              srcset="/images/about2_393w.webp"
            />

            <source
              media="(max-width: 1339px)"
              srcset="/images/about2_393w.jpg"
            />

            <source type="image/webp" srcset="/images/about2_404w.webp" />

            <img
              class="home-about__img"
              src="/images/about2_404w.jpg"
              alt="about2"
            />
          </picture>
        </div>

        <div class="home-about__title-area">
          <h3 class="home-about__title home-about__title--w868">
            Мы предоставляем площади для вашего мероприятия
          </h3>
        </div>

        <div class="home-about__text-area">
          <p class="home-about__text">
            И оказываем помощь с организацией, если вам это нужно.
            <br />
            Наша цель: вовлечь в культурную жизнь города как можно больше людей,
            помочь молодым ребятам сделать первые шаги к своей мечте и
            рассказать всем о том, что их волнует.
          </p>
        </div>
      </div>

      <div class="home-about__third-block">
        <picture class="home-about__third-picture">
          <source
            media="(max-width: 767px)"
            type="image/webp"
            srcset="/images/about3_672w.webp"
          />

          <source
            media="(max-width: 767px)"
            srcset="/images/about3_672w.jpg"
          />

          <source
            media="(max-width: 959px)"
            type="image/webp"
            srcset="/images/about3_872w.webp"
          />

          <source
            media="(max-width: 1169px)"
            type="image/webp"
            srcset="/images/about3_672w.webp"
          />

          <source
            media="(max-width: 1169px)"
            srcset="/images/about3_672w.jpg"
          />

          <source
            media="(max-width: 1339px)"
            type="image/webp"
            srcset="/images/about3_821w.webp"
          />

          <source
            media="(max-width: 1339px)"
            srcset="/images/about3_821w.jpg"
          />

          <source type="image/webp" srcset="/images/about3_872w.webp" />

          <img
            class="home-about__third-img"
            src="/images/about3_872w.jpg"
            alt="about3"
          />
        </picture>

        <div class="home-about__third-block-wrapper">
          <p class="home-about__text home-about__text--mb90">
            Мы уже успешно организовали и провели более 100 проектов.
            Посмотрите, как это было классно.
          </p>

          <LinkArrowLabel class="home-about__link" label="Смотреть"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="less">
  .home-about {
    &__container {
      .container();
    }

    &__first-block {
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-weight: 700;
      font-size: 44px;
      word-wrap: break-word;

      @media @bw1100 {
        font-size: 34px;
      }

      @media @bw960 {
        font-size: 26px;
      }

      @media @bw720 {
        font-size: 18px;
      }

      &--w868 {
        width: 100%;
        max-width: 868px;
      }
    }

    &__text {
      align-self: flex-end;
      width: 100%;
      min-height: 75px;
      font-size: 18px;

      @media @bw960 {
        min-height: 66px;
        font-size: 16px;
      }

      &--mt50 {
        margin-top: 50px;
        max-width: 867px;

        @media @bw1660 {
        max-width: 65.635%;
        }

        @media @bw1340 {
          max-width: 89.972%;
        }

        @media @bw720 {
          max-width: 100%;
          margin-top: 30px;
        }
      }

      &--mb90 {
        margin-bottom: 90px;

        @media @bw1660 {
          margin-bottom: 88px;
        }

        @media @bw960 {
          width: 39.548%;
          margin-bottom: 0;
        }

        @media @bw768 {
          margin-bottom: 30px;
        }

        @media @bw650 {
          width: 100%;
        }
      }
    }

    &__second-block {
      display: grid;
      grid-template-columns: 35% 30.217% auto 30.285%;
      grid-template-rows: auto auto 100px auto 50px auto;
      margin: 100px 0 110px 0;

      @media @bw1660 {
        grid-template-columns: 34.365% 31.349% auto 31.19%;
        grid-template-rows: auto auto 100px auto 94px auto;
        margin-bottom: 87px;
      }

      @media @bw1340 {
        grid-template-columns: 10% 55.707% auto 31.19%;
        margin: 80px 0 52px 0;
      }

      @media @bw960 {
        grid-template-columns: 59.182% auto 37%;
        grid-template-rows: auto 52px 28px auto 38px auto 28px;
      }

      @media @bw720 {
        grid-template-columns: auto 68.929%;
        grid-template-rows: auto 60px auto 32px auto 52px auto;
        margin: 60px 0 50px 0;
      }
    }

    &__first-picture-area {
      grid-row: 1 / span 2;
      grid-column: 1 / span 2;

      @media @bw960 {
        grid-row: 1;
        grid-column: 1 / span 3;
      }

      @media @bw720 {
        grid-column: 1 / span 2;
      }
    }

    &__first-picture {
      .responsive-parent(@after-pt: 66.322%);
    }

    &__img {
      .responsive-child();
    }
    
    &__second-picture-area {
      grid-row: 2 / span 3;
      grid-column-start: 4;
      padding-bottom: 16px;

      @media @bw1660 {
        padding-bottom: 14px;
      }

      @media @bw1340 {
        padding-bottom: 0;
      }

      @media @bw960 {
        grid-row: 3 / span 5;
        grid-column-start: 3;
      }

      @media @bw720 {
        grid-row: 7;
        grid-column: 2;
      }
    }

    &__second-picture {
      .responsive-parent(@after-pt: 122.0297%);
    }
    
    &__title-area {
      grid-row-start: 4;
      grid-column: 1 / span 2;

      @media @bw960 {
        grid-column: 1;
      }

      @media @bw720 {
        grid-row: 3;
        grid-column: 1 / span 2;
      }
    }

    &__text-area {
      grid-row-start: 6;
      grid-column: 2 / span 3;

      @media @bw960 {
        grid-column: 1;
        padding-left: 70px;
      }

      @media @bw720 {
        grid-row: 5;
        grid-column: 1 / span 2;
        padding: 0;
      }
    }

    &__third-block {
      display: flex;
      justify-content: space-between;

      @media @bw960 {
        flex-direction: column;
        gap: 80px;
      }

      @media @bw768 {
        gap: 60px;
      }
    }

    &__third-picture {
      .responsive-parent(@after-pt: 40.86%);

      width: 69.715%;

      @media @bw1660 {
        .responsive-parent(@after-pt: 41.522%);
        
        width: 68.81%;
      }

      @media @bw960 {
        .responsive-parent(@after-pt: 41.102%);

        width: 100%;
      }

      @media @bw650 {
        .responsive-parent(@after-pt: 41.429%);
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 64.737%;
        background-color: @red_BC;
      }
    }

    &__third-img {
      position: absolute;
      display: block;
      top: 19px;
      left: 49px;
      width: calc(100% - 58px);

      @media @bw1660 {
        top: 18px;
        left: 38px;
        width: calc(100% - 46px);
      }

      @media @bw960 {
        top: 14px;
        left: 29px;
        width: calc(100% - 36px);
      }

      @media @bw650 {
        top: 5px;
        left: 11px;
        width: calc(100% - 13px);
      }
    }

    &__third-block-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 25.787%;

      @media @bw1660 {
        width: 28.016%;
      }

      @media @bw960 {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
      }

      @media @bw650 {
        flex-direction: column;
        align-items: flex-end;
      }
    }

    &__link {
      @media @bw960 {
        width: 262px;
        height: 40px;
      }

      @media @bw650 {
        width: 280px;
      }

      .link__label {
        @media @bw1340 {
          font-size: 16px;
        }
        
        @media @bw650 {
          font-size: 14px;
        }
      }
    }
  }
</style>