<template>
  <header class="home-header">
    <h1 class="home-header__title">Арт — пространство</h1>

    <picture class="home-header__picture">
      <source type="image/webp" srcset="/images/lenni.webp" />

      <img src="/images/lenni.png" alt="lenni" class="home-header__img" />
    </picture>

    <p class="home-header__text">
      Для людей, горящих сердцем и делом <br />место для настоящего
    </p>
  </header>
</template>

<script setup></script>

<style lang="less">
  .home-header {
    padding: 100px 0;

    @media @bw1340 {
      padding: 80px 0 73px;
    }

    @media @bw768 {
      padding: 80px 0 40px;
    }

    &__title,
    &__text {
      padding-left: 40px;
      padding-right: 40px;
      color: @black;
      font-family: @font2;
      font-weight: 400;
      font-size: 45px;
      line-height: 1.28;
      text-align: center;
      text-transform: uppercase;

      @media @bw1660 {
        font-size: 35px;
      }

      @media @bw1340 {
        font-size: 30px;
      }

      @media @bw650 {
        font-size: 4.0625vw;
      }
    }

    &__picture {
      .responsive-parent(@after-pt: 16.927%);

      margin: 70px 0;

      @media @bw1660 {
        .responsive-parent(@w: 113.3%; @after-pt: 16.927%);

        margin: 70px -6.64%;
      }

      @media @bw1340 {
        .responsive-parent(@w: 126.92%; @after-pt: 16.927%);

        margin: 50px -13.41%; 
      }

      @media @bw768 {
        .responsive-parent(@w: 136.615%; @after-pt: 16.927%);

        margin: 29px -18.438%;    
      }
    }

    &__img {
      .responsive-child();
    }

    &__text {
      margin: 0 auto;
      max-width: 990px;

      @media @bw650 {
        padding: 0 20px;
      }
    }
  }
</style>