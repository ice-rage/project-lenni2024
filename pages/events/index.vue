<template>
  <div class="events">
    <CardListing
      class="events__card-listing"
      :title="'Мероприятия'"
      :listClass="'card-listing__events-list'"
      :cardData="eventCards"
      :linkData="link"
    />

    <AdditionalServices class="events__additional-services"/>

    <UserOffers class="events__offers"/>
  </div>
</template>

<script setup>
  import jsonEventCards from "~/data/cards/event.json";

  definePageMeta({
    title: "Мероприятия",
  });

  const eventCards = {
    name: "CardEvent",
    class: "card-listing__card-event",
    cards: jsonEventCards,
  };

  const link = {
    name: "LinkArrow",
    class: "card-listing__link-arrow link-arrow--vertical",
    label: "Показать еще",
  };
</script>

<style lang="less">
  .events {
    padding-bottom: 85px;

    @media @bw1660 {
      padding-bottom: 48px;
    }

    @media @bw1020 {
      padding-bottom: 0;
    }

    &__breadcrumbs {
      margin-top: 40px;
    }

    &__card-listing {
      margin-top: 138px;

      @media @bw1020 {
        margin-top: 91px;
      }

      @media @bw450 {
        margin-top: 80px;
      }
    }

    &__additional-services {
      padding-top: 100px;
    }

    &__offers {
      gap: 50px;

      @media @bw1340 {
        gap: 50px;
      }

      @media @bw768 {
        max-width: 50vw;
      }
    }

    &__offers .offers__event-btn,
    &__offers .offers__rent-btn {
      @media @bw1020 {
        max-height: 49px;
        font-size: 14px;
      }
    }

    &__offers .offers__event-btn {
      @media @bw1020 {
        padding: 15px 52px;
      }
    }

    &__offers .offers__rent-btn {
      @media @bw1020 {
        padding: 15px 49px;
      }
    }

    &__info {
      margin-top: 100px;

      @media @bw450 {
        margin: 90px 0 5px;
      }
    }
  }
</style>