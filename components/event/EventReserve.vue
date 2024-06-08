<template>
  <form
    class="event-reserve"
    id="js-reserveForm"
    data-price='{ "red": 1400, "black": 1250 }'
  >
    <EventReserveCheckboxes class="event-reserve__checkboxes"/>
    <EventReserveScheme class="event-reserve__scheme"/>
    <EventReserveOrder class="event-reserve__order"/>
    <EventReserveLegend class="event-reserve__legend"/>
  </form>
</template>

<script setup></script>

<style lang="less">
  .event-reserve {
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
      grid-area: checkboxes;
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
    
    &__order {
      grid-area: order;
    }
    
    &__legend {
      grid-area: legend;

      @media @bw1020 {
        margin-top: 8px;
      }
    }
  }
</style>