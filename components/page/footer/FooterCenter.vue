<template>
  <div class="footer-center">
    <NuxtLink
      to="/"
      target="_blank"
      rel="nofollow"
      class="footer-center__sn-link"
    >
      <SvgIcon
        class="footer-center__sn-icon"
        name="instagram"
        width="58"
        height="58"
      />
    </NuxtLink>

    <NuxtLink
      to="/"
      target="_blank"
      rel="nofollow"
      class="footer-center__sn-link"
    >
      <SvgIcon
        class="footer-center__sn-icon"
        name="vkontakte"
        width="58"
        height="58"
      />
    </NuxtLink>
  </div>
</template>

<script setup></script>

<style lang="less">
  .footer-center {
    display: flex;
    justify-content: space-between;
    width: 160px;

    @media @bw650 {
      width: 126px;
    }

    &__sn-link {
      height: 58px;

      @media @bw650 {
        height: 48px;
      }
    }

    &__sn-icon {
      width: 100%;
      height: 100%;
    }
  }
</style>