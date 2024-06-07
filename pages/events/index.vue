<template>
  <div class="events">
    <CardListing class="events__card-listing" :title="'Мероприятия'"/>

    <AdditionalServices class="events__additional-services" />

    <UserOffers class="events__offers" />

    <InfoItems vertical class="events__info">
      <InfoItem iconName="location" class="home-contacts__contact">
        <h4 class="info-item__title">Томск, Белая 8</h4>
        <p class="info-item__data">2 этаж</p>
        <p class="info-item__data">оф. 207-208</p>
      </InfoItem>

      <InfoItem iconName="rent" class="home-contacts__contact">
        <h4 class="info-item__title">Отдел аренды</h4>
        <a href="tel:74993500730" class="info-item__data"> +7 499 350 0730 </a>
        <a href="mailto:hi@tagree.ru" class="info-item__data"> hi@tagree.ru </a>
      </InfoItem>

      <InfoItem iconName="events" class="home-contacts__contact">
        <h4 class="info-item__title">Отдел мероприятий</h4>
        <a href="tel:74993500730" class="info-item__data"> +7 499 350 0730 </a>
        <a href="mailto:hi@tagree.ru" class="info-item__data"> hi@tagree.ru </a>
      </InfoItem>
    </InfoItems>
  </div>
</template>

<script setup>
  definePageMeta({
    title: "Мероприятия",
  });
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
      .container();

      margin-top: 100px;

      @media @bw450 {
        margin: 90px 0 5px;
      }
    }
  }
</style>