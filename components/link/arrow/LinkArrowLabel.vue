<template>
  <div 
    class="arrow-label" 
    :class="{ 'arrow-label--vertical' : vertical }"
  >
    <LinkLabel :label="label" class="arrow-label__label"/>

    <LinkArrow class="arrow-label__arrow"/>
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
  .arrow-label {
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

      .link-arrow {
        height: 91px;
        transform: rotate(90deg);

        @media @bw1020 {
          height: 67px;
          padding-bottom: 4px;
        }
      }
    }

    &__label,
    &__arrow {
      pointer-events: auto;
    }

    &__label {
      padding: 0;

      @media @bw1020 {
        font-size: 14px;
      }
    }
  }
</style>