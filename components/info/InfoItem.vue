<template>
  <div class="info-item">
    <div class="info-item__img">
      <SvgIcon 
        class="info-item__icon"
        :name="iconName"
        width="24"
        height="24"
      />
    </div>

    <div class="info-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  const { iconName } = defineProps({
    iconName: {
      type: String,
      default: "",
      required: true,
    },
  });
</script>

<style lang="less">
  .info-item {
    display: flex;
    align-items: center;
    gap: 54px;

    @media @bw1170 {
      flex-direction: column;
      gap: 30px;
    }

    @media @bw600 {
      flex-direction: row;
    }

    &:first-child {
      @media @bw1170 {
        min-width: 138px;
        margin-right: 60px;
      }

      @media @bw768 {
        margin-right: 28px;
      }
    }

    &:nth-child(2) {
      @media @bw1170 {
        min-width: 185px;
        margin-right: 37px;
      }

      @media @bw768 {
        margin-right: 14px;
      }
    }

    &:last-child {
      margin-bottom: 0;

      @media @bw1170 {
        min-width: 195px;
      }
    }

    &__img {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 43px;
      background-color: @black;
      color: @red_BC;

      @media @bw650 {
        width: 85px;
        height: 85px;
        padding: 21px 20px 20px 21px;
      }

      @media @bw450 {
        width: 65px;
        height: 65px;
      }
    }

    &__content {
      @media @bw1170 {
        text-align: center;
      }

      @media @bw600 {
        text-align: left;
      }
    }

    &__title {
      margin: 0 0 10px;
      font-weight: 600;
      font-size: 20px;

      @media @bw1170 {
        font-weight: 700;
        font-size: 18px;
      }

      @media @bw768 {
        font-weight: 600;
        font-size: 16px;
      }

      @media @bw450 {
        font-size: 14px;
      }
    }

    &__data {
      display: block;
      margin: 0 0 6px;
      font-size: 16px;

      @media @bw650 {
        margin-bottom: 0;
        font-size: 14px;
      }

      &[href] {
        transition: color 0.2s;

        &:hover {
          @media (hover: hover) {
            color: @red_BC;
          }
        }

        &:active {
          color: @red_BC;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>