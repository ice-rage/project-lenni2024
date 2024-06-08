<template>
  <form
    class="reserve"
    id="js-reserveForm"
    data-price='{ "red": 1400, "black": 1250 }'
  >
    <section class="reserve__checks" id="js-reserveChecks">
      <h4 class="reserve__section-title">Забронировать столик</h4>

      <div class="reserve__checkboxes-wrapper">
        <FormCheckbox 
          v-for="checkbox in checkboxes" 
          :key="checkbox.id" 
          :label="`${checkbox.id} стол`"
          :red="checkbox.red"
          :disabled="checkbox.disabled"
          :initialValue="checkbox.checked"
          class="reserve__checkbox"
        />
      </div>
    </section>

    <div class="reserve__scheme">
      <section class="reserve__scheme-container">
        <h4 class="reserve__scheme-title">Сцена</h4>

        <div class="reserve__scheme-wrapper">
          @@include('scene.html', { "class": "reserve__scene" })
        </div>
      </section>
    </div>

    <section class="reserve__order">
      <h4 class="reserve__section-title">Ваши пригласительные билеты</h4>

      <div class="reserve__tickets-list">
        <div class="reserve__tickets js-reserveTickets">
          <div
            class="reserve__qty"
            data-caption="шт."
            data-price="1400"
            data-currency="₽"
          ></div>
          <div class="reserve__sum" data-currency="₽"></div>
        </div>

        <div class="reserve__tickets js-reserveTickets">
          <div
            class="reserve__qty"
            data-caption="шт."
            data-price="1250"
            data-currency="₽"
          ></div>
          <div class="reserve__sum" data-currency="₽"></div>
        </div>
      </div>

      <div
        class="reserve__total"
        id="js-totalSum"
        data-caption="Сумма"
        data-currency="₽"
      ></div>

      <button
        type="submit"
        class="reserve__submit btn btn--red"
        id="js-reserveSubmit"
        disabled
      >
        Купить билеты
      </button>
    </section>

    <section class="reserve__legend">
      <h4 class="reserve__section-title">Стоимость пригласительного билета</h4>

      <div class="reserve__prices-list">
        <div class="reserve__prices">
          <div class="reserve__price-mark reserve__price-mark--red"></div>
          <div
            class="reserve__price"
            data-caption="1 персона"
            data-currency="₽"
          >
            1400
          </div>
        </div>

        <div class="reserve__prices">
          <div class="reserve__price-mark"></div>
          <div
            class="reserve__price"
            data-caption="1 персона"
            data-currency="₽"
          >
            1250
          </div>
        </div>
      </div>

      <label class="reserve__section-title">Примечание</label>

      <div class="reserve__notes-list">
        <div class="reserve__note">
          <div class="reserve__mark-container">
            <div class="reserve__note-mark"></div>
            <div class="reserve__note-mark reserve__note-mark--red"></div>
          </div>

          <div class="reserve__designation">Доступные места</div>
        </div>

        <div class="reserve__note">
          <div class="reserve__mark-container">
            <div class="reserve__note-mark reserve__note-mark--filled"></div>
          </div>

          <div class="reserve__designation">Забронировано</div>
        </div>
      </div>
    </section>
  </form>
</template>

<script setup>
  const checkboxes = [
    {
      id: 1,
      red: true,
      disabled: false,
      checked: false,
    },
    {
      id: 2,
      red: false,
      disabled: false,
      checked: false,
    },
    {
      id: 3,
      red: false,
      disabled: false,
      checked: false,
    },
    {
      id: 4,
      red: true,
      disabled: false,
      checked: false,
    },
    {
      id: 5,
      red: false,
      disabled: true,
      checked: false,
    },
    {
      id: 6,
      red: false,
      disabled: false,
      checked: false,
    },
    {
      id: 7,
      red: true,
      disabled: false,
      checked: false,
    },
    {
      id: 8,
      red: true,
      disabled: false,
      checked: false,
    },
    {
      id: 9,
      red: true,
      disabled: false,
      checked: false,
    },
    {
      id: 10,
      red: false,
      disabled: false,
      checked: false,
    },
    {
      id: 11,
      red: false,
      disabled: false,
      checked: false,
    },
  ];
</script>

<style lang="less">
  .reserve {
    display: grid;
    gap: 67px 11.2%;
    grid-template-columns: 405px calc(88.8% - 405px);
    grid-template-areas: 
      "checkboxes scheme"
      "order legend";
    width: 100%;

    @media @bw1660{
      gap: 67px 6.27%;
      grid-template-columns: 401px calc(93.73% - 401px);
    }

    @media @bw1020 {
      gap: 60px;
      grid-template-columns: auto 388px;
      grid-template-areas: 
        "scheme scheme"
        "checkboxes legend"
        "checkboxes order";
    }

    @media @bw650 {
      gap: 60px 40px;
      grid-template-columns: auto 56.098%;
    }

    @media @bw550 {
      grid-template-areas: 
        "scheme scheme"
        "checkboxes legend"
        "order order";
    }

    @media @bw450 {
      gap: 50px;
      grid-template-columns: 100%;
      grid-template-areas: 
        "scheme"
        "legend"
        "checkboxes"
        "order";
    }

    & > div {
      box-sizing: border-box;
      text-align: center;
    }

    &__checkboxes,
    &__order {
      @media @bw450 {
        margin-top: 10px;
      }
    }

    &__checkboxes {
      grid-area: checks;
      max-width: 218px;

      @media @bw1020 {
        max-width: 192px;
      }
    }

    &__section-title {
      color: @black;
      font-weight: 700;
      font-size: 18px;

      @media @bw1020 {
        font-size: 16px;
      }
    }

    &__checkboxes-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      margin-top: 30px;

      @media @bw1020 {
        gap: 15px;
        margin-top: 0;
      }
    }

    &__checkbox > .form-checkbox__label {
      @media @bw450 {
        font-size: 14px;
      }
    }

    &__scheme {
      grid-area: scheme;
      padding-top: 2px;

      @media @bw1020 {
        padding: 0 40px;
      }

      @media @bw768 {
        padding: 0;
      }
    }

    &__scheme-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }

    &__scheme-title {
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

    &__scheme-wrapper {
      .responsive-parent(@after-pt: 51.15384%);
    }

    &__scene {
      .responsive-child();
    }
    
    &__order {
      grid-area: order;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      
      @media @bw550 {
        width: 100%;
        max-width: 380px;
        margin: 0 auto;
      }
    }

    &__tickets-list {
      width: 100%;
      height: 65px;
      margin: 20px 0 25px;

      @media @bw1020 {
        height: 63px;
        margin: 23px 0 20px;
      }

      @media @bw650 {
        height: auto;
        margin-bottom: 22px;
      }
    }

    &__tickets {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin: 0 0 15px;

      @media @bw1020 {
        margin-bottom: 17px;
      }

      @media @bw650 {
        min-height: 22px;
        margin-bottom: 10px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__qty,
    &__sum {
      @media @bw650 {
        font-size: 14px;
      }
    }

    &__qty {
      &::after {
        content: " " attr(data-caption) " | " attr(data-price) " " attr(data-currency);
      }
    }

    &__sum {
      font-weight: 600;
      font-size: 18px;

      @media @bw1020 {
        font-size: 16px;
      }

      &::after {
        content: " " attr(data-currency);
      }
    }

    &__total {
      width: 100%;
      margin-bottom: 53px;
      font-weight: 600;
      font-size: 20px;

      @media @bw1020 {
        margin-bottom: 45px;
      }

      @media @bw650 {
        margin-bottom: 40px;
        font-size: 18px;
      }

      &::before {
        content: attr(data-caption);
        margin-right: 33px;
        padding-left: 112px;

        @media @bw1020 {
          padding-left: 105px;
        }

        @media @bw650 {
          margin-right: 8.505%;
          padding-left: 27.062%;
        }

        @media @bw450 {
          margin-right: 24.063vw;
          padding-left: 13.75vw;
        }
      }

      &::after {
        content: " " attr(data-currency);
      }
    }

    &__submit {
      width: 100%;
    }
    
    &__legend {
      grid-area: legend;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      @media @bw1020 {
        margin-top: 8px;
      }

      @media @bw650 {
        align-items: flex-start;
      }
    }

    &__prices-list {
      margin-top: 20px;
      margin-bottom: 37px;

      @media @bw650 {
        margin-bottom: 30px;
      }

      @media @bw450 {
        margin-top: 22px;
      }
    }

    &__prices {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;

      @media @bw650 {
        margin-bottom: 10px;
      }

      @media @bw450 {
        gap: 13px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__price-mark {
      box-sizing: border-box;
      width: 24px;
      height: 24px;
      background-color: @black;

      @media @bw650 {
        width: 21px;
        height: 21px;
      }
      
      &--red {
        background-color: @red_BC;
      }
    }

    &__price {
      position: relative;
      font-size: 14px;

      &::before {
        content: " " attr(data-currency);
        position: absolute;
        top: 0;
        left: 35px;
        font-size: 0.95em;
      }

      &::after {
        content: " | " attr(data-caption);
        margin-left: 10px;
      }
    }

    &__notes-list {
      display: flex;
      flex-direction: column;
      gap: 13px;
      margin-top: 20px;

      @media @bw1020 {
        gap: 10px;
        margin-top: 12px;
      }

      @media @bw650 {
        margin-top: 15px;
      }
    }

    &__note {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media @bw1020 {
        height: 30px;
      }

      @media @bw650 {
        justify-content: flex-start;
        height: auto;
      }
    }

    &__mark-container {
      position: relative;
      display: flex;
      width: 36px;
      height: 24px;
      margin-right: 20px;

      @media @bw650 {
        margin-right: 10px;
      }
    }

    &__note-mark {
      position: absolute;
      box-sizing: border-box;
      top: 0;
      left: 0;
      width: 66.667%;
      height: 100%;
      border: 1px solid @black;
      border-radius: 50%;

      &--red {
        left: 33.333%;
        border: 1px solid @red_A5;
      }

      &--filled {
        left: 33.333%;
        border: none;
        background-color: #BFBFBF;

        @media @bw650 {
          left: 0;
        }
      }
    }

    &__designation {
      font-size: 14px;
      text-transform: lowercase;

      @media @bw1020 {
        align-self: flex-end;
      }
    }
  }
</style>