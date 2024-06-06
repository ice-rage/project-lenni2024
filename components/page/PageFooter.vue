<template>
  <footer class="page-footer">
    <div class="page-footer__container">
      <div class="page-footer__border">
        <hr class="page-footer__decoration decoration decoration"/>
        <hr class="page-footer__decoration decoration decoration--invert"/>
      </div>

      <div class="page-footer__wrapper">
        <FooterLeft class="page-footer__left"/>

        <FooterCenter class="page-footer__center"/>

        <FooterRight class="page-footer__right"/>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import FooterLeft from "./footer/FooterLeft.vue";
  import FooterCenter from "./footer/FooterCenter.vue";
  import FooterRight from "./footer/FooterRight.vue";
</script>

<style lang="less">
  .page-footer {
    box-sizing: border-box;
    padding: 65px 0 75px;

    @media @bw1660 {
      padding-top: 100px;
    }

    @media @bw1020 {
      padding-bottom: 50px;
    }

    &__container {
      .container();

      @media @bw650 {
        max-width: 428px;
        margin: 0 auto;
      }
    }

    &__border {
      display: flex;
      justify-content: space-between;
      gap: 7.346%;
      margin-bottom: 60px;
    }

    &__decoration {
      height: 2px;
    }

    &__wrapper {
      position: relative;
      display: flex;
      justify-content: space-between;

      @media @bw650 {
        flex-direction: column;
      }
    }

    &__left {
      margin-right: 3.107%;
    }

    &__center {
      position: absolute;
      left: calc(50% - 80px);
      bottom: 0;

      @media @bw1020 {
        bottom: calc(50% - 102px);
      }

      @media @bw650 {
        left: calc(50% - 63px);
        bottom: calc(50% - 160px);
      }
    }
  }
</style>