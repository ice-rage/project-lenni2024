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

    <UserOffers class="home__offers"/>

    <CardListing 
      class="home__blog-listing"
      :title="'Блог'"
      :cardComponent="cardData"
      :linkComponent="linkData"
    />
  </div>
</template>

<script setup>
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