<template>
  <div class="home">
    <HomeHeader class="home__header"/>

    <UserOffers class="home__offers"/>

    <HomeAbout class="home__about"/>

    <HomeUpcoming class="home__upcoming"/>

    <CardListing 
      class="home__blog-listing"
      :title="'Блог'"
      :listClass="'card-listing__article-list'"
      :cardData="articleCards"
      :linkData="link"
    />

    <HomeContacts class="home__contacts"/>

    <HomeQuote class="home__quote"/>
  </div>
</template>

<script setup>
  import jsonArticleCards from "~/data/cards/article.json";
  import HomeHeader from "~/components/home/HomeHeader.vue";
  import HomeAbout from "~/components/home/HomeAbout.vue";
  import HomeUpcoming from "~/components/home/HomeUpcoming.vue";
  import HomeContacts from "~/components/home/HomeContacts.vue";
  import HomeQuote from "~/components/home/HomeQuote.vue";

  definePageMeta({
    title: "Главная",
    breadcrumbs: {
      visible: false,
    },
  });

  const articleCards = {
    name: "CardArticle",
    class: "card-listing__card-article",
    cards: jsonArticleCards,
  }

  const link = {
    name: "LinkPlain",
    class: "card-listing__link-plain",
    label: "Смотреть все",
  }
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
        max-width: 50vw;
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