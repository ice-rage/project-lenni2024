<template>
  <div class="footer-left">
    <nav class="footer-left__nav">
      <NuxtLink to="/" class="footer-left__nav-link link">
        Календарь мероприятий
      </NuxtLink>
      <NuxtLink to="/" class="footer-left__nav-link link">
        Провести мероприятие
      </NuxtLink>
      <NuxtLink to="/" class="footer-left__nav-link link">
        Стать арендатором
      </NuxtLink>
      <NuxtLink to="/" class="footer-left__nav-link link">
        Наши проекты
      </NuxtLink>
      <NuxtLink to="/" class="footer-left__nav-link link">
        Контакты
      </NuxtLink>
    </nav>

    <div class="footer-left__copyright">© Millennials 2022</div>

    <div class="footer-left__politics">
      <NuxtLink 
        to="/" 
        target="_blank" 
        class="footer-left__confidentiality"
      >
        Политика конфиденциальности
      </NuxtLink>
      <NuxtLink 
        to="/" 
        target="_blank" 
        class="footer-left__cookies"
      >
        Cookies
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less">
  .footer-left {
    width: 100%;
    max-width: 384px;

    @media @bw1020 {
      max-width: 298px;
    }
    
    &__nav {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 22px;
      margin-bottom: 60px;
      padding-left: 26px;

      @media @bw1660 {
        margin-bottom: 58px;
      }

      @media @bw1020 {
        margin-bottom: 178px;
      }

      @media @bw650 {
        gap: 27px;
        margin-bottom: 59px;
        padding: 1px 0 3px 26px;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background-color: @red_BC;
      }
    }

    &__nav-link,
    &__confidentiality,
    &__cookies {
      display: block;
      font-weight: 600;
      transition: color 0.2s;

      @media @bw1020 {
        font-size: 14px;
      }

      &:hover {
        @media (hover :hover) {
          color: @red_A5;
        }
      }

      &:active {
        color: @red_A5;
      }
    }

    &__nav-link {
      min-height: 22px;

      @media @bw768 {
        min-height: 19px;
      }
    }

    &__copyright {
      @media @bw650 {
        position: absolute;
        right: 0;
        bottom: 27px;
      }
    }

    &__politics {
      display: flex;
      gap: 60px;
      margin-top: 20px;

      @media @bw1170 {
        gap: 30px;
        margin-top: 14px;
      }

      @media @bw1020 {
        gap: 15px;
      }

      @media @bw768 {
        gap: 30px;
      }

      @media @bw650 {
        position: absolute;
        flex-direction: column;
        gap: 20px;
        left: 0;
        bottom: 62px;
        margin-top: 0;
      }
    }

    &__confidentiality {
      @media @bw768 {
        max-width: 160px;
      }

      @media @bw650 {
        max-width: 100%;
      }
    }

    &__cookies {
      @media @bw768 {
        align-self: center;
      }

      @media @bw650 {
        align-self: flex-start;
      }
    }
  }
</style>