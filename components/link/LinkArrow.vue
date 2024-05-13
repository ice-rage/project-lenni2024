<template>
  <div class="arrow-link">
    <a href="#" class="arrow-link__link link">{{ label }}</a>
    
    <ArrowPlain class="arrow-link__arrow"/>
  </div>
</template>

<script setup>
  const { label } = defineProps({
    label: {
      type: String,
      default: "",
    },
  });
</script>

<style lang="less">
  .arrow-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;

    &--vertical {
      flex-direction: column;
      gap: 18px;

      @media @bw1020 {
        gap: 16px;
      }

      .arrow__icon {
        transform: rotate(90deg);
      }
    }

    &--vertical &__arrow {
      @media @bw1020 {
        height: 67px;
        padding-bottom: 4px;
      }
    }

    &__link,
    &__arrow {
      pointer-events: auto;
    }

    &__link {
      @media @bw1020 {
        font-size: 14px;
      }
    }
  }
</style>