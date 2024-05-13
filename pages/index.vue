<template>
  <div class="home">
    <header class="main-header home__main-header">
      <h1 class="main-header__title">Арт — пространство</h1>

      <picture class="main-header__picture">
        <source type="image/webp" srcset="/images/lenni.webp">

        <img src="/images/lenni.png" alt="lenni" class="main-header__img">
      </picture>

      <p class="main-header__text">
        Для людей, горящих сердцем и делом <br>место для настоящего
      </p>
    </header>

    <section class="offers home__offers">
      <h2 class="offers__title">Я хочу:</h2>

      <div class="offers__btns">
        <button 
          type="button" 
          class="offers__event-btn btn" 
          id="js-openEventBtn"
          @click="openModalPp"
        >
          Провести мероприятие
        </button>
        <button 
          type="button" 
          class="offers__rent-btn btn"
        >
          Стать арендатором
        </button>
      </div>
    </section>

    <CardListing 
      class="home__blog-listing"
      :title="'Блог'"
      :cardComponent="cardData"
      :linkComponent="linkData"
    />
  </div>
</template>

<script setup>
  import { useStore } from "~/store";

  const store = useStore();

  const { openModalPp } = store;

  const cardData = {
    name: "CardArticle",
    listClass: "listing__article-list",
    cardClass: "listing__article-card",
    cards: [
    {
        "img": "/images/blog/theatre_467w.jpg",
        "img_1170vw": "/images/blog/theatre_708w.jpg",
        "img_webp": "/images/blog/theatre_467w.webp",
        "img_1170vw_webp": "/images/blog/theatre_708w.webp",
        "alt": "Theatre Photosession",
        "title": "Фотосессия в стенах Театра драмы",
        "description": "Организовывая фотосессию для локального бренда одежды мы смогли воплотить все пожелания заказчика и у нас получилась отличная работа. Смотрите как это было ",
        "time": "26.11.2021",
        "dateTime": "2021-11-26T00:00"
      },
      {
        "img": "/images/blog/vr-exhibition_467w.jpg",
        "img_1170vw": "/images/blog/vr-exhibition_708w.jpg",
        "img_webp": "/images/blog/vr-exhibition_467w.webp",
        "img_1170vw_webp": "/images/blog/vr-exhibition_708w.webp",
        "alt": "VR Exhibition",
        "title": "Выставка VR в Томске",
        "description": "Клуб виртуальной реальности - это другие миры. яркие эмоции. новый опыт. ... Мы предоставляем нашим клиентам лучший игровой VR-опыт в Томске.",
        "time": "05.11.2021",
        "dateTime": "2021-11-05T00:00"
      },
      {
        "img": "/images/blog/rocking-radio_467w.jpg",
        "img_1170vw": "/images/blog/rocking-radio_708w.jpg",
        "img_webp": "/images/blog/rocking-radio_467w.webp",
        "img_1170vw_webp": "/images/blog/rocking-radio_708w.webp",
        "alt": "Rocking Radio",
        "title": "Rocking radio в заброшенном ангаре",
        "description": "15 электрогенераторов, километры проводов и пару тонн света. Все это для того, чтобы организовать лучшую вечеринку года для ребят из Новосибирска.",
        "time": "01.11.2021",
        "dateTime": "2021-11-01T00:00"
      },
    ],
  }

  const linkData = {
    name: "LinkPlain",
    class: "listing__plain-link",
    label: "Смотреть все",
  }
</script>

<style lang="less"></style>