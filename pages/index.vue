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
  </div>
</template>

<script setup>
  import { useStore } from "~/store";

  const store = useStore();

  const { openModalPp } = store;
</script>

<style lang="less"></style>