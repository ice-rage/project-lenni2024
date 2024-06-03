<template>
  <section class="listing">
    <h2 class="listing__title section-title">{{ title }}</h2>

    <div :class="listClass" v-if="cards.length">
      <component 
        v-for="(card, cardIndex) in cards" :key="cardIndex"
        :is="cardComponent"
        :class="cardData.class"
        :data="card">
      </component>

      <component
        :is="linkComponent" 
        :class="linkData.class" 
        :label="linkData.label">
      </component>
    </div>

    <div v-else class="listing__empty-list">
      Пока что здесь пусто... Но это ненадолго :)
    </div>
  </section>
</template>

<script setup>
  const { title, listClass, cardData, linkData } = defineProps({
    title: {
      type: String,
      default: "",
    },
    listClass: {
      type: String,
      default: "",
    },
    cardData: {
      type: Object,
      default: () => {},
      required: true,
    },
    linkData: {
      type: Object,
      default: () => {},
      required: true,
    },
  });

  const cards = computed(() => cardData.cards || []);

  const cardComponent = cardData.name
    ? defineAsyncComponent(() => 
      import(`~/components/card/${cardData.name}.vue`)) 
    : null;

  const linkComponent = linkData.name
    ? defineAsyncComponent(() => 
      import(`~/components/link/${linkData.name}.vue`)) 
    : null;
</script>

<style lang="less">
  .listing {
    .container();

    display: flex;
    flex-direction: column;

    &__events-list {
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

    &__event-card {
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
      margin: -50px auto 50px;
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