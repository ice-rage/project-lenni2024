<template>
  <div class="footer-right">
    <SubscriptionForm class="footer-right__subscription-form"/>

    <div class="footer-right__creator">
      <span class="footer-right__creator-label">
        Создание и продвижение
      </span>

      <NuxtLink
        to="https://tagree.ru/"
        target="_blank"
        rel="nofollow"
        class="footer-right__creator-link"
      >
        <SvgIcon
          class="footer-right__creator-icon"
          name="tagree"
          width="56"
          height="17"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less">
  .footer-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 410px;

    @media @bw1660 {
      max-width: 388px;
    }

    &__creator {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 15px;
      height: 22px;

      @media @bw1020 {
        height: 19px;
      }

      @media @bw650 {
        align-items: flex-start;
        height: 22px;
        margin-top: 266px;
      }
    }

    &__creator-label {
      font-weight: 600;

      @media @bw1020 {
        font-size: 14px;
      }
    }

    &__creator-link {
      height: 17px;

      @media @bw650 {
        width: 58px;
        height: 22px;
      }
    }

    &__creator-icon {
      width: 100%;
      height: 100%;
    }
  }
</style>