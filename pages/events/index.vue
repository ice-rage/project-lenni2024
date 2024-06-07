<template>
  <div class="events">
    <CardListing class="events__card-listing" :title="'Мероприятия'"/>

    <AdditionalServices class="events__additional-services" />

    <UserOffers class="events__offers" />

    <InfoItems vertical class="events__info">
      <InfoItem iconName="prices" class="home-contacts__contact">
        <h4 class="info-item__title">Цены</h4>
        <p class="info-item__data">
          Цены, указанные на сайте носят информационный характер. Мы 
          придерживаемся индивидуального подхода в работе с клиентом.
        </p>
      </InfoItem>

      <InfoItem iconName="contacts" class="home-contacts__contact">
        <h4 class="info-item__title">Контакты</h4>
        <p class="info-item__data">Отдел организации мероприятий</p>
        <a href="tel:74993500730" class="info-item__data">+7 499 350 0730</a>
        <a href="mailto:hi@tagree.ru" class="info-item__data">hi@tagree.ru</a>
      </InfoItem>

      <InfoItem iconName="advantage" class="home-contacts__contact">
        <h4 class="info-item__title">Преимущество</h4>
        <p class="info-item__data">
          Мы имеем все возможности для того, чтобы помочь как малому бизнесу 
          и молодым талантам, так и большим корпорациям и холдингам.
        </p>
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
      padding-bottom: 50px;
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
      gap: 49px;

      @media @bw1340 {
        gap: 50px;
      }

      @media @bw768 {
        gap: 25px;
        max-width: 50vw;
      }
    }

    &__offers .offers__rent-btn {
      @media @bw1660 {
        min-width: 246px;
      }

      @media @bw1340 {
        min-width: 238px;
      }

      @media @bw768 {
        min-width: 280px;
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

      .info-item__content {
        @media @bw600 {
          text-align: center;
        }
      }
    }
  }
</style>