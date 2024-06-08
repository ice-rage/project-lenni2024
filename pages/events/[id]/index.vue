<template>
  <article class="event">
    <h1 class="event__title title">Вечер | The Best of Sade</h1>

    <div class="event__info">
      <div class="event__info-wrapper">
        <div class="event__info-block event__info-block--left">
          <div class="event__decoration decoration decoration--invert"></div>

          <span class="event__label event__label--f30">16/12/2022</span>
          <span class="event__label event__label--f16">Кафе «Птичка»</span>

          <div class="event__decoration decoration decoration--invert"></div>
        </div>

        <div class="event__info-block event__info-block--right">
          <div class="event__decoration decoration"></div>

          <div class="event__time">
            <span class="event__label event__label--f30">20.00</span>
            <span class="event__label event__label--f16">начало</span>
          </div>

          <span class="event__label event__label--f16">Ленина 10 | 2 этаж</span>

          <div class="event__decoration decoration"></div>
        </div>
      </div>

      <div class="event__picture-wrapper">
        <picture class="event__picture">
          <source
            media="(max-width: 1169px)"
            type="image/webp"
            srcset="/images/event/main_245w.webp"
          />

          <source
            media="(max-width: 1169px)"
            srcset="/images/event/main_245w.jpg"
          />

          <source
            media="(max-width: 1659px)"
            type="image/webp"
            srcset="/images/event/main_426w.webp"
          />

          <source
            media="(max-width: 1659px)"
            srcset="/images/event/main_426w.jpg"
          />

          <source
            type="image/webp"
            srcset="/images/event/main_497w.webp"
          />

          <img
            src="/images/event/main_497w.jpg"
            alt="sade"
            class="event__img"
          />
        </picture>
      </div>
    </div>

    <div class="event__container">
      <section class="event__program">
        <div class="event__content content">
          <h5>Программа мероприятия:</h5>
          <ul>
            <li>20:15 — Приветствие гостей</li>
            <li>20:30 — Первая подача блюд | Салаты</li>
            <li>20:40 — Живой вокал | Композиции 1-3</li>
            <li>21:20 — Подача горячих блюд</li>
            <li>21:30 — Живой вокал | Композиции 4-7</li>
            <li>22:15 — Подача десерта</li>
            <li>22:30 — Живой вокал | Композиции 8-9</li>
            <li>23:00 — Завершение вечера</li>
          </ul>
        </div>
      </section>

      <section class="event__description">
        <div class="event__content content">
          <h5>The Best of Sade</h5>
          <p>
            Первый альбом-компиляция Sade, выпущенный в 1994 году. Он содержит 9
            треков, включая самые популярные хиты группы, раритеты и их любимые
            треки.
          </p>
          <p>
            Группа продемонстрировала необычайное долголетие и креативность
            своей творческой карьеры.
            <br />
            Она лидировала музыкальных чартах с 1994 по 1995 год, став
            четырехкратно платиновой в США и продав более 2 миллионов копий в
            Европе.
          </p>
        </div>
      </section>

      <div class="event__tracklist">
        <div class="event__content content">
          <ol>
            <li>Your Love Is King</li>
            <li>Hang On To Your Love</li>
            <li>Smooth Operator</li>
            <li>Jezebel</li>
            <li>The Sweetest Taboo</li>
            <li>Is It A Crime</li>
            <li>Never As Good As The First Time</li>
            <li>Love Is Stronger Than Pride</li>
            <li>Paradise</li>
          </ol>
        </div>
      </div>

      
    </div>

    <UpDownBtn class="event__up-down-btn"/>
  </article>
</template>

<script setup>
  definePageMeta({
    title: "Вечер | The Best of Sade",
  });
</script>

<style lang="less">
  .event {
    padding: 38px 0 87px;

    @media @bw1660 {
      padding-bottom: 50px;
    }

    @media @bw1340 {
      padding: 40px 0 0;
    }

    @media @bw1020 {
      padding-top: 41px;
    }

    @media @bw768 {
      padding-top: 80px;
    }

    &__title {
      padding-left: 22px;

      @media @bw1660 {
        margin-left: calc(50% - 405px);
        text-align: left;
      }

      @media @bw1340 {
        margin: 0 auto;
        padding-left: 12px;
        text-align: center;
      }

      @media @bw450 {
        padding-left: 6px;
        margin-left: calc(50% - 125px);
        text-align: left;
      }
    }

    &__info {
      position: relative;
      display: flex;
      max-width: 943px;
      height: 532px;
      margin: 80px 0 80px calc(50% - 456px);

      @media @bw1660 {
        max-width: 854px;
        height: 456px;
        margin-left: calc(50% - 395px);
      }

      @media @bw1170 {
        max-width: 71.0938vw;
        height: 34.115vw;
        margin: 64px 0 76px 16.146vw;
      }

      @media @bw768 {
        max-width: 546px;
        height: 262px;
        margin-left: calc(50% - 266px);
      }

      @media @bw600 {
        max-width: 261px;
        height: 358px;
        margin: 40px 0 60px calc(50% - 121px);
      }
    }

    &__info-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 223px 0 217px 0;

      @media @bw1660 {
        margin: auto 0;
      }

      @media @bw1340 {
        margin: 119px 0 87px 0;
      }

      @media @bw600 {
        margin: 302px 0 0;
      }
    }

    &__info-block {
      display: flex;
      flex-direction: column;

      .decoration {
        max-width: 160px;
      }

      &--left {
        align-items: flex-end;

        .decoration {
          max-width: 139px;

          @media @bw600 {
            max-width: 83px;
          }
        }
      }
      
      &--right .decoration {
        max-width: 160px;

        @media @bw600 {
          max-width: 95px;
        }
      }
    }

    &__decoration {
      height: 1px;
    }

    &__label {
      font-family: @font3;
      line-height: 1.2;
      text-transform: uppercase;

      &--f30 {
        margin: 12px 0 11px;
        font-weight: 300;
        font-size: 30px;

        @media @bw1170 {
          margin: 6px 0 9px;
          font-size: 2.344vw;
        }

        @media @bw768 {
          font-size: 18px;
        }
      }

      &--f16 {
        margin-bottom: 12px;
        font-weight: 700;
        font-size: 16px;

        @media @bw1170 {
          margin-bottom: 7px;
          font-size: 1.563vw;
        }

        @media @bw768 {
          font-size: 12px;
        }
      }
    }

    &__picture-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      @media @bw600 {
        width: 245px;
        height: 262px;
      }
    }

    &__picture {
      .responsive-parent(@w: 52.704%; @after-pt: 107.042%);

      display: block;
      margin-left: 208px;

      @media @bw1660 {
        .responsive-parent(@w: 49.883%; @after-pt: 107.042%);

        margin-left: 200px;
      }

      @media @bw1170 {
        .responsive-parent(@w: 44.872%; @after-pt: 106.939%);

        margin-left: 19.531vw;
      }

      @media @bw768 {
        margin-left: 150px;
      }

      @media @bw600 {
        width: 100%;
        margin-left: 0;
      }
    }

    &__img {
      .responsive-child();
    }

    &__time {
      display: flex;
      align-items: flex-end;
      gap: 12px;

      @media @bw1340 {
        gap: 7px;
      }
    }

    &__container {
      .container();
    }

    &__program {
      margin-bottom: 81px;

      @media @bw1340 {
        margin-bottom: 60px;
      }

      @media @bw450 {
        width: 102.857%;
        margin-bottom: 58px;
      }
    }

    &__content {
      max-width: 868px;

      @media @bw1660 {
        max-width: 831px;
      }

      @media @bw1170 {
        max-width: 600px;
      }
    }

    &__description {
      margin-bottom: 50px;

      @media @bw1340 {
        margin-bottom: 40px;
      }

      @media @bw450 {
        margin-bottom: 38px;
      }
    }

    &__tracklist {
      margin-bottom: 80px;

      @media @bw1340 {
        margin-bottom: 56px;
      }

      @media @bw450 {
        margin-bottom: 40px;
      }
    }
  }
</style>