<template>
  <section class="additional-services">
    <h2 class="additional-services__title section-title">
      Дополнительные услуги
    </h2>

    <p class="additional-services__label">
      Перед запуском проекта, мы подготавливаем подробную смету и 
      согласуем ее с клиентом. Убедившись, что все пожеланию учтены 
      и мы можем приступать к реализациии проекта, начинается сложная, 
      но интересная работа, результатом которой будет проведение 
      вашего мероприятия на высшем уровне.
    </p>

    <ServiceTable class="additional-services__table"/>
  </section>
</template>

<script setup></script>

<style lang="less">
  .additional-services {
    .container();

    &__title {
      font-weight: 400;
      font-size: 22px;
      line-height: 1.364;
      letter-spacing: 0.02em;

      @media @bw1020 {
        margin-bottom: 98px;
      }

      @media @bw768 {
        font-size: 18px;
      }

      @media @bw450 {
        font-size: 16px;
      }
    }

    &__label {
      max-width: 868px;

      @media @bw1660 {
        max-width: 829px;
      }

      @media @bw1020 {
        max-width: 100%;
      }
    }

    &__table {
      max-width: 1334px;
      margin: 60px auto 50px;

      @media @bw1660 {
        margin-bottom: 40px;
      }

      @media @bw1020 {
        margin-top: 50px;
      }

      @media @bw450 {
        margin: 30px -20px 40px;
      }
    }
  }
</style>