<template>
  <section class="listing">
    <h2 class="listing__title section-title">{{ title }}</h2>

    <div :class="listClass" v-if="cards.length">
      <component 
        v-for="(card, cardIndex) in cards" :key="cardIndex"
        :is="cardName"
        :class="cardClass"
        :data="card">
      </component>
    </div>

    <component v-if="cards.length"
      :is="linkName" 
      :class="linkClass" 
      :label="linkLabel">
    </component>

    <div v-else class="listing__empty-list">
      Пока что здесь пусто... Но это ненадолго :)
    </div>
  </section>
</template>

<script setup>
  const { title, cardComponent, linkComponent } = defineProps({
    title: {
      type: String,
      default: "",
    },
    cardComponent: {
      type: Object,
      default: () => {},
      required: true,
    },
    linkComponent: {
      type: Object,
      default: () => {},
      required: true,
    },
  });

  const listClass = computed(() => cardComponent.listClass || "");

  const cards = computed(() => cardComponent.cards || []);

  const cardName = cardComponent.name
    ? defineAsyncComponent(() => 
      import(`~/components/card/${cardComponent.name}.vue`)) 
    : null;

  const cardClass = computed(() => cardComponent.cardClass || "");

  const linkName = linkComponent.name
    ? defineAsyncComponent(() => 
      import(`~/components/link/${linkComponent.name}.vue`)) 
    : null;

  const linkClass = computed(() => linkComponent.class || "");

  const linkLabel = computed(() => linkComponent.label || "");
</script>

<style lang="less" scoped>
  .listing {
    .container();

    display: flex;
    flex-direction: column;

    &__events-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -30px -120px;

      @media @bw1660 {
        margin: 0 -20px -100px;
      }

      @media @bw1340 {
        margin: 0 -15px -100px;
      }

      @media @bw1020 {
        justify-content: center;
        margin: 0 -15px -80px;
      }

      @media @bw768 {
        margin: 0 -10px -80px;
      }

      @media @bw650 {
        margin: 0 0 -60px;
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

    &__arrow-link {
      width: 128px;
      margin: 70px auto 50px;

      @media @bw1660 {
        margin-top: 60px;
      }

      @media @bw1020 {
        width: 99px;
      }

      @media @bw650 {
        margin-top: 50px;
      }
    }

    &__plain-link {
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