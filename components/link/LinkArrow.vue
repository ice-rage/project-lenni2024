<template>
  <div class="link-arrow" :class="{ 'link-arrow--vertical' : vertical }">
    <LinkPlain :label="label" class="link-arrow__link"/>

    <ArrowPlain class="link-arrow__arrow"/>
  </div>
</template>

<script setup>
  const { label, vertical } = defineProps({
    label: {
      type: String,
      default: "",
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style lang="less">
  .link-arrow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;

    &--vertical {
      flex-direction: column;
      justify-content: flex-end;
      gap: 18px;

      @media @bw1020 {
        gap: 16px;
      }

      .link-arrow__arrow {
        height: 91px;
        transform: rotate(90deg);

        @media @bw1020 {
          height: 67px;
          padding-bottom: 4px;
        }
      }
    }

    &__link,
    &__arrow {
      pointer-events: auto;
    }

    &__link {
      padding: 0;

      @media @bw1020 {
        font-size: 14px;
      }
    }
  }
</style>