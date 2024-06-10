<template>
  <section class="reserve-order">
    <h4 class="reserve-order__section-title">Ваши пригласительные билеты</h4>

    <div class="reserve-order__ticket-list">
      <div class="reserve-order__tickets">
        <div
          class="reserve-order__qty"
          data-caption="шт."
          :data-price="store.getSelectedTicketType['red'].price"
          data-currency="₽"
        >
          {{ store.getSelectedTicketType['red'].count }}
        </div>
        <div class="reserve-order__sum" data-currency="₽">
          {{ store.getSelectedTicketType['red'].sum }}
        </div>
      </div>

      <div class="reserve-order__tickets">
        <div
          class="reserve-order__qty"
          data-caption="шт."
          :data-price="store.getSelectedTicketType['black'].price"
          data-currency="₽"
        >
          {{ store.getSelectedTicketType['black'].count }}
        </div>
        <div class="reserve-order__sum" data-currency="₽">
          {{ store.getSelectedTicketType['black'].sum }}
        </div>
      </div>
    </div>

    <div
      class="reserve-order__total"
      data-caption="Сумма"
      data-currency="₽"
    >
      {{ store.getSelectedTicketsTotalSum.value }}
    </div>

    <button
      type="submit"
      class="reserve-order__submit btn btn--red"
      :disabled="store.getReserveSubmitBtnState.value"
    >
      Купить билеты
    </button>
  </section>
</template>

<script setup>
  const store = useStore();
</script>

<style lang="less">
  .reserve-order {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
      
    @media @bw550 {
      width: 100%;
      max-width: 380px;
      margin: 0 auto;
    }

    &__ticket-list {
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
  }
</style>