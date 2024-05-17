<template>
  <div class="contacts-map">
    <div class="contacts-map__wrapper">
      <div class="contacts-map__content" id="js-contactsMap"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less">
  .contacts-map {
    display: block;
    width: 100%;
    max-width: 752px;

    &__wrapper {
      .responsive-parent(@after-pt: 65.559%);

      @media @bw1340 {
        .responsive-parent(@after-pt: 65.395%);
      }

      @media @bw768 {
        .responsive-parent(@after-pt: 66.429%);
      }
    }

    &__content {
      .responsive-child();
    }

    &__placemark {
      display: flex;
      align-items: flex-end;
    }

    &__marker {
      width: 9px;
      height: 9px;
      max-width: initial;
    }

    &__marker-icon {
      padding: 0 0 14px 3px;
    }
  }
</style>