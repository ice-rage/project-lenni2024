<template>
  <button 
    type="button" 
    class="up-down-btn"
    :class="{ 'up-down-btn--down': store.upDownBtn.toDown }"
    @click="scrollWindow"
  ></button>
</template>

<script setup>
  const store = useStore();

  const { scrollWindow } = store;
</script>

<style lang="less">
  .up-down-btn {
    position: fixed;
    right: 15px;
    bottom: 45px;
    display: block;
    width: 50px;
    height: 50px;
    padding: 0;
    background-color: rgba(@gray_6C, 0.5);
    border-radius: 50%;
    border: 0;
    outline: none;
    transition: background-color 0.2s;
    cursor: pointer;
    z-index: 10;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 21px;
      width: 23px;
      height: 8px;
      border-radius: 2px;
      background-color: @white;
      transition: transform 0.4s ease-out;
    }

    &::before {
      left: 19px;
      transform: rotate(45deg);
    }

    &::after {
      right: 19px;
      transform: rotate(-45deg);
    }

    &:hover {
      @media (hover: hover) {
        background-color: rgba(@red_A5, 0.8);
      }
    }

    &:active {
      background-color: @red_A5;
    }

    &--down {
      &::before {
        transform: rotate(-45deg);
      }

      &::after {
        transform: rotate(45deg);
      }
    }
  }
</style>