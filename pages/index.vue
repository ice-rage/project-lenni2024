<template>
  <div class="home">
    <HomeHeader class="home__header"/>

    <UserOffers class="home__offers"/>

    <HomeAbout class="home__about"/>

    <HomeUpcoming class="home__upcoming"/>

    <CardListing class="home__blog-listing" articles :title="'Блог'"/>

    <HomeContacts class="home__contacts"/>

    <HomeQuote class="home__quote"/>

    <UpDownBtn class="home__up-down-btn"/>
  </div>
</template>

<script setup>
  definePageMeta({
    title: "Главная",
    breadcrumbs: {
      visible: false,
    },
  });
</script>

<style lang="less">
  .home {
    &__offers,
    .section-title {
      @media @bw1660 {
        max-width: 604px;
      }

      @media @bw1340 {
        max-width: 566px;
      }

      @media @bw650 {
        max-width: calc(100vw - 40px);
      }
    }

    &__offers {
      margin-bottom: 200px;
      
      @media @bw768 {
        margin-bottom: 100px;
      }
    }

    &__about {
      margin-bottom: 90px;

      @media @bw1660 {
        margin-bottom: 100px;
      }

      @media @bw960 {
        margin-bottom: 50px;
      }
    }

    &__upcoming {
      margin-bottom: 64px;

      @media @bw1660 {
        margin-bottom: 71px;
      }

      @media @bw1340{
        margin-bottom: 35px;
      }

      @media @bw768 {
        margin-bottom: 41px;
      }
    }

    &__blog-listing {
      margin-bottom: 78px;

      @media @bw1660 {
        margin-bottom: 90px;
      }

      @media @bw1170 {
        margin-bottom: 58px;
      }

      @media @bw768 {
        margin-bottom: 60px;
      }
    }

    &__contacts {
      margin-bottom: 227px;

      @media @bw1660 {
        margin-bottom: 130px;
      }

      @media @bw1340 {
        margin-bottom: 100px;
      }
    }
  }
</style>