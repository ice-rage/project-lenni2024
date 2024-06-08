<template>
  <SvgIcon 
    name="arrow"
    class="link-arrow" 
    :class="{ 
      'link-arrow--left' : left, 
      'link-arrow--disabled': disabled 
    }"
  />
  
</template>

<script setup>
  const { left, disabled } = defineProps({
    left: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style lang="less">
  .link-arrow {
    display: flex;
    width: 91px;
    height: 60px;
    padding: 0;
    border: none;
    background: none;
    color: @black;
    font-size: 0;
    text-decoration: none;
    transition: color 0.2s;
    cursor: pointer;

    @media @bw1020 {
      width: 67px;
      height: 40px;
    }

    &--left {
      transform: rotate(180deg);
    }

    &--disabled {
      color: @gray_BF;
      pointer-events: none;
    }

    &:hover {
      @media(hover: hover) {
        color: @red_A5;
      }
    }

    &:active {
      color: @red_A5;
    }
  }
</style>