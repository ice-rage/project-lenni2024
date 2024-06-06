<template>
  <a href="#" class="arrow-plain">
    <SvgIcon class="arrow-plain__icon" name="arrow"/>
  </a>
</template>

<script setup></script>

<style lang="less">
  .arrow-plain {
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

    &__icon {
      width: 100%;
      height: 100%;
    }
  }
</style>