<template>
  <section class="reserve-legend">
    <h4 class="reserve-legend__section-title">Стоимость пригласительного билета</h4>

    <div class="reserve-legend__price-list">
      <div class="reserve-legend__prices">
        <div class="reserve-legend__price-mark reserve-legend__price-mark--red"></div>
        <div class="reserve-legend__price" data-caption="1 персона" data-currency="₽">
          1400
        </div>
      </div>

      <div class="reserve-legend__prices">
        <div class="reserve-legend__price-mark"></div>
        <div class="reserve-legend__price" data-caption="1 персона" data-currency="₽">
          1250
        </div>
      </div>
    </div>

    <label class="reserve-legend__section-title">Примечание</label>

    <div class="reserve-legend__note-list">
      <div class="reserve-legend__note">
        <div class="reserve-legend__mark-container">
          <div class="reserve-legend__note-mark"></div>
          <div class="reserve-legend__note-mark reserve-legend__note-mark--red"></div>
        </div>

        <div class="reserve-legend__designation">Доступные места</div>
      </div>

      <div class="reserve-legend__note">
        <div class="reserve-legend__mark-container">
          <div class="reserve-legend__note-mark reserve-legend__note-mark--filled"></div>
        </div>

        <div class="reserve-legend__designation">Забронировано</div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="less">
  .reserve-legend {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media @bw650 {
      align-items: flex-start;
    }

    &__price-list {
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

    &__note-list {
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