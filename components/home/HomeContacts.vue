<template>
  <section class="home-contacts">
    <div class="home-contacts__container">
      <h2 class="home-contacts__title section-title">
        Контакты
      </h2>

      <div class="home-contacts__wrapper">
        <InfoItems class="home-contacts__contacts">
          <InfoItem iconName="location" class="home-contacts__contact">
            <h4 class="info-item__title">Томск, Белая 8</h4>
            <p class="info-item__data">2 этаж</p>
            <p class="info-item__data">оф. 207-208</p>
          </InfoItem>

          <InfoItem iconName="rent" class="home-contacts__contact">
            <h4 class="info-item__title">Отдел аренды</h4>
            <a href="tel:74993500730" class="info-item__data">
              +7 499 350 0730
            </a>
            <a href="mailto:hi@tagree.ru" class="info-item__data">
              hi@tagree.ru
            </a>
          </InfoItem>

          <InfoItem iconName="events" class="home-contacts__contact">
            <h4 class="info-item__title">Отдел мероприятий</h4>
            <a href="tel:74993500730" class="info-item__data">
              +7 499 350 0730
            </a>
            <a href="mailto:hi@tagree.ru" class="info-item__data">
              hi@tagree.ru
            </a>
          </InfoItem>
        </InfoItems>
        
        <HomeContactMap class="home-contacts__map"/>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="less">
  .home-contacts {
    &__container {
      .container();
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;

      @media @bw1170 {
        flex-direction: column-reverse;
        gap: 100px;
        max-width: 708px;
        margin: 0 auto;
      }

      @media @bw768 {
        gap: 59px;
      }
    }

    &__map {
      margin-left: 30px;

      @media @bw1170 {
        margin-left: 0;
      }
    }
  }
</style>