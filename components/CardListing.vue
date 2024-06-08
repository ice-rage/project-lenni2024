<template>
  <section class="card-listing">
    <h2 class="card-listing__title section-title">{{ title }}</h2>

    <div 
      v-if="cards.length" 
      :class="articles 
        ? 'card-listing__article-list' 
        : 'card-listing__event-list'
      "
    >
      <component 
        v-for="(card, cardIndex) in cards" :key="cardIndex"
        :is="articles ? CardArticle : CardEvent"
        :class="articles 
          ? 'card-listing__card-article' 
          : 'card-listing__card-event'
        "
        :data="card">
      </component>

      <component
        :is="articles ? LinkLabel : LinkArrowLabel"
        :label="articles ? 'Смотреть все' : 'Показать еще'"
        :class="articles 
          ? 'card-listing__link-plain' 
          : 'card-listing__link-arrow'
        "
        :vertical="!articles"
      >
      </component>
    </div>

    <div v-else class="card-listing__empty-list">
      Пока что здесь пусто... Но это ненадолго :)
    </div>
  </section>
</template>

<script setup>
  import eventCards from "~/data/card/events.json";
  import articleCards from "~/data/card/articles.json";
  import CardEvent from "./card/CardEvent.vue";
  import CardArticle from "./card/CardArticle.vue";
  import LinkLabel from "./link/LinkLabel.vue";
  import LinkArrowLabel from "./link/arrow/LinkArrowLabel.vue";

  const { title, articles } = defineProps({
    title: {
      type: String,
      default: "",
      required: true,
    },
    articles: {
      type: Boolean,
      default: false,
    },
  });

  const cards = computed(() => articles ? articleCards : eventCards);
</script>

<style lang="less">
  .card-listing {
    .container();

    display: flex;
    flex-direction: column;

    &__event-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -30px;

      @media @bw1660 {
        margin: 0 -20px;
      }

      @media @bw1340 {
        margin: 0 -15px;
      }

      @media @bw1020 {
        justify-content: center;
        margin: 0 -15px;
      }

      @media @bw768 {
        margin: 0 -10px;
      }

      @media @bw650 {
        flex-direction: column;
        align-items: center;
        margin: 0 0 60px;
      }
    }

    &__card-event {
      width: calc(33.333% - 60px);
      margin: 0 30px 120px;

      @media @bw1660 {
        width: calc(33.333% - 40px);
        margin: 0 20px 100px;
      }

      @media @bw1340 {
        width: calc(33.333% - 30px);
        margin: 0 15px 100px;
      }

      @media @bw1020 {
        width: calc(50% - 30px);
        max-width: 405px;
        margin: 0 15px 80px;
      }

      @media @bw768 {
        margin: 0 10px 80px;
      }

      @media @bw650 {
        width: 100%;
        margin: 0 0 60px;
      }
    }

    &__article-list {
      display: flex;
      flex-direction: column;

      @media @bw1170 {
        max-width: 708px;
        margin: 0 auto;
      }
    }

    &__link-arrow {
      margin: -50px auto 0;
      padding: 0 7px;

      @media @bw1660 {
        margin-top: -40px;
      }

      @media @bw1020 {
        width: 99px;
        padding: 0;
      }

      @media @bw650 {
        margin-top: -10px;
      }
    }

    &__link-plain {
      align-self: flex-end;
      margin-top: 70px;

      @media @bw1660 {
        margin-top: 58px;
      }

      @media @bw1170 {
        margin-top: 40px;
      }

      @media @bw768 {
        margin-top: 30px;
      }
    }

    &__empty-list {
      color: @red_A5;
      font-weight: 600;
      font-size: 22px;
      text-align: center;
    }
  }
</style>