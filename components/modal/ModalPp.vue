<template>
  <div 
    v-if="isActive"  
    ref="modalPp"
    class="modal-pp"
    tabindex="0"
    v-focus
    @click.self="closeEventPp"
    @keyup.esc="closeEventPp"
  >
    <div class="modal-pp__wrapper">
      <div class="modal-pp__sticky-close">
        <button
          type="button"
          class="modal-pp__x-btn x-btn"
          @click="closeEventPp"
        >
          <SvgIcon class="x-btn__icon" name="x" width="24" height="24"/>
        </button>
      </div>

      <div class="modal-pp__container">
        <h2 class="modal-pp__title">
          Заполните форму, <br />
          и мы подберем площадку
        </h2>

        <ModalForm class="modal-pp__form"/>
      </div>
    </div>
  </div>
</template>

<script setup>
  const store = useStore();

  const { closeEventPp } = store;

  const modalPp = ref();

  const isActive = computed(() => store.modal.isEventPpActive);
</script>

<style lang="less">
  .modal-pp {
    position: fixed;
    box-sizing: border-box;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 90px 50px 50px;
    background-color: @gray;
    overflow-y: auto;
    z-index: 100;

    @supports (backdrop-filter: blur(25px)) {
      background-color: @black_40;
      backdrop-filter: blur(25px);
    }

    @media @bw1340 {
      padding: 72px 40px 50px;
    }

    @media @bw650 {
      padding: 80px 20px 50px;
    }

    &__wrapper {
      position: relative;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 1210px;
      margin: 0 auto auto;
      background-color: @gray;
      background-image: url("/images/noise.png");
      background-position: 0, 0;
      background-size: auto;
      background-repeat: repeat;

      @media @bw1660 {
        max-width: 1144px;
      }

      @media @bw1340 {
        max-width: 89.5833vw;
      }

      @media @bw650 {
        max-width: 69.231vw;
      }

      @media @bw450 {
        max-width: 87.5vw;
      }
    }

    &__sticky-close {
      position: sticky;
      align-self: flex-end;
      top: 0;
      width: 0;
      height: 0;
    }

    &__x-btn {
      position: absolute;
      width: 60px;
      height: 60px;
      top: -30px;
      right: -33px;

      @media @bw1660 {
        right: -30px;
      }

      @media @bw650 {
        width: 48px;
        height: 48px;
        top: -24px;
        right: -24px;
      }

      @media @bw450 {
        width: 36px;
        height: 36px;
        top: -18px;
        right: -18px;
      }

      .x-btn__icon {
        @media @bw650 {
          width: 22px;
          height: 22px;
        }
      }
    }

    &__container {
      box-sizing: border-box;
      width: 100%;
      max-width: 950px;
      margin: 0 auto;
      padding: 0 40px 40px;

      @media @bw450 {
        padding: 0 20px 40px;
      }
    }

    &__title {
      box-sizing: border-box;
      margin: -40px 0 70px -85px;
      padding: 10px 85px;
      max-width: 595px;
      background-color: @black;
      color: @white;
      font-family: @font2;
      font-weight: 400;
      font-size: 22px;
      line-height: 1.364;
      letter-spacing: 0.02em;      
      text-transform: uppercase;

      @media @bw1660 {
        margin-left: -52px;
      }

      @media @bw1340 {
        margin-left: -27px;
        padding: 10px 60px 10px 18px;
      }

      @media @bw1170 {
        min-width: 465px;
        max-width: 50.855vw;
      }

      @media @bw768 {
        min-width: auto;
        max-width: 60.547vw;
        font-size: 19px;
      }

      @media @bw650 {
        max-width: 52.308vw;
        margin: -30px 0 40px -6px;
        padding: 10px 22px 10px 20px;
      }

      @media @bw500 {
        font-size: 16px;
      }

      @media @bw450 {
        max-width: 70.3125vw;
        font-size: 14px;
        line-height: 1.357;
      }
    }

    &__form {
      max-width: 870px;
      margin: auto;
    }
  }
</style>