<template>
  <div class="info-items" :class="{'info-items--vertical' : vertical }">
    <slot></slot>
  </div>
</template>

<script setup>
  const { vertical } = defineProps({
    vertical: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style lang="less">
  .info-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 67px;
    width: 100%;
    max-width: 400px;
    margin-left: 3px;

    @media @bw1660 {
      gap: 52px;
      max-width: 376px;
      margin-left: 0;
    }

    @media @bw1170 {
      flex-direction: row;
      justify-content: flex-start;
      gap: 0;
      max-width: 100%;
      margin-left: 64px;
    }

    @media @bw768 {
      justify-content: center;
      margin-left: 0;
    }

    @media @bw600 {
      flex-direction: column;
      gap: 40px;
    }

    &--vertical {
      flex-direction: row;
      justify-content: space-between;
      max-width: 1334px;
      margin-right: 0;

      @media @bw1660 {
        gap: 30px;
        max-width: 100%;
      }

      @media @bw1170 {
        gap: 30px;
        margin-left: 0;
      }

      @media @bw960 {
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px calc(10% + 29px);
      }

      @media @bw600 {
        flex-direction: row;
      }

      @media @bw450 {
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        gap: 40px;
      }

      .info-item {
        flex-direction: column;
        gap: 41px;
        width: 100%;
        max-width: 401px;
        text-align: center;

        @media @bw960 {
          max-width: 36.458vw;
        }

        @media @bw450 {
          gap: 30px;
        }

        &:first-child,
        &:nth-child(2) {
          @media @bw1170 {
            margin-right: 0;
          }
        }

        &:first-child,
        &:nth-child(2),
        &:last-child {
          @media @bw1170 {
            min-width: auto;
          }
        }

        &:first-child {
          @media @bw450 {
            min-width: 70vw;
          }
        }

        &:nth-child(2) {
          @media @bw450 {
            min-width: 68.438vw;
          }
        }

        &:last-child {
          @media @bw450 {
            min-width: 76.25vw;
          }
        }

        &__title {
          @media @bw960 {
            margin-bottom: 16px;
          }

          @media @bw450 {
            margin-bottom: 10px;
          }
        }

        &__data {
          margin-bottom: 0;

          @media @bw960 {
            font-size: 14px;
          }

          @media @bw450 {
            font-size: 13px;
          }
        }
      }
    }
  }
</style>