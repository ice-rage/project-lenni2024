<template>
  <article class="article">
    <div class="article__container">
      <h1 class="article__title title">Заголовок страницы</h1>

      <div class="article__content content">
        <h1>Заголовок h1</h1>
        <h2>Заголовок h2</h2>
        <h3>Заголовок h3</h3>
        <h4>Заголовок h4</h4>
        <h5>Заголовок h5</h5>
        <h6>Заголовок h6</h6>

        <p>
          Абзац текста, содержащий <b>жирный</b> текст и
          <a href="https://tagree.ru/" target="_blank">ссылку</a>
        </p>

        <ul>
          <li>Элемент списка 1</li>
          <li>Элемент списка 2</li>
          <li>Элемент списка 3</li>
        </ul>

        <ol>
          <li>Элемент списка 1</li>
          <li>Элемент списка 2</li>
          <li>Элемент списка 3</li>
        </ol>

        <blockquote>Здесь содержится цитата</blockquote>

        <img src="/images/about1_870w.jpg" alt="Подпись картинки"/>
      </div>
    </div>
  </article>
</template>

<script setup>
  definePageMeta({ title: "Страница стилей по умолчанию"});
</script>

<style lang="less">
  .article {
    &__container {
      .container();

      padding-top: 40px;
    }

    &__title {
      margin-bottom: 80px;
    }
  }
</style>