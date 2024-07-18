<template>
  <form 
    ref="reserveForm" 
    class="event-reserve" 
    @submit.prevent="onSubmit"
  >
    <EventReserveCheckboxes
      class="event-reserve__checkboxes"
      :checkboxes="reservationItems.checkboxes"
      @checkboxToggled="toggleReservation"
    />
    <EventReserveScheme 
      class="event-reserve__scheme" 
      @tableToggled="toggleReservation"
    />
    <EventReserveOrder 
      class="event-reserve__order"
      :tickets="selectedTickets"
    />
    <EventReserveLegend 
      class="event-reserve__legend" 
      :redTicketPrice="selectedTickets.red.price"
      :blackTicketPrice="selectedTickets.black.price"
    />
  </form>
</template>

<script setup>
  import checkboxData from "~/data/reserveCheckboxes.json";
  import tableData from "~/data/sceneTables.json";

  const reserveForm = ref();

  const reservationItems = {
    checkboxes: reactive(checkboxData),
    tables: reactive(tableData),
  };

  let selectedTickets = reactive({
    red: { price: 1400, count: 0, sum: 0 },
    black: { price: 1250, count: 0, sum: 0 },
    totalSum: 0,
  });

  provide("tables", reservationItems.tables);

  const toggleReservation = (type, id, state) => {
    if (reservationItems.hasOwnProperty(type)) {
      const itemById = reservationItems[type]
        .find(item => item.id == id);
      
      if (itemById) {
        itemById.active = state;

        calculateTicketSum();
      }
    }
  }

  const calculateTicketSum = () => {
    resetSelectedTickets();

    const activeCheckboxes = reservationItems.checkboxes
      .filter(checkbox => checkbox.active);
    
    activeCheckboxes.forEach(checkbox => {
      if (checkbox.red) {
        selectedTickets.red.count++;
      } else {
        selectedTickets.black.count++;
      }
    });

    selectedTickets.red.sum = selectedTickets.red.price *
      selectedTickets.red.count;
    selectedTickets.black.sum = selectedTickets.black.price *
      selectedTickets.black.count;
    
    selectedTickets.totalSum = selectedTickets.red.sum +
      selectedTickets.black.sum;
  }

  const resetSelectedTickets = () => {
    selectedTickets.red.count = 0;
    selectedTickets.red.sum = 0;
    selectedTickets.black.count = 0;
    selectedTickets.black.sum = 0;
    selectedTickets.totalSum = 0;
  }

  const onSubmit = () => {
    const formData = new FormData(reserveForm.value);

    useOnSubmit(formData, () => {
      for (const type in reservationItems) {
        if (reservationItems.hasOwnProperty(type)) {
          reservationItems[type]
            .filter(item => item.active)
            .forEach(activeItem => activeItem.active = false);
        }
      }

      resetSelectedTickets();
    });
  }
</script>

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