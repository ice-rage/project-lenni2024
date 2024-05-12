<template>
  <div class="pp" v-if="isActive" @click.self="closeModalPp">
    <div class="pp__wrapper">
      <div class="pp__sticky-close">
        <button 
          type="button" 
          class="pp__x-btn x-btn js-ppCloseBtn" 
          @click="closeModalPp"
        >
          <SvgIcon
            class="x-btn__icon"
            name="x"
            width="24"
            height="24"
          />
        </button>
      </div>

      <div class="pp__container">
        <h2 class="pp__title">Заполните форму, <br> и мы подберем площадку</h2>

        <form class="pp__form form" id="js-eventForm">
          <div class="form__list">
            <div class="form__field form__field--w50 field">
              <h5 class="field__title">Формат мероприятия:</h5>

              <div class="field__radio radio">
                <label class="radio__label">
                  <input type="radio" name="format" value="seminar" class="radio__input" checked>
                  <span class="radio__mark"></span>
                  <span class="radio__name">Мастер-класс/семинар</span>
                </label>

                <label class="radio__label">
                  <input type="radio" name="format" value="concert" class="radio__input">
                  <span class="radio__mark"></span>
                  <span class="radio__name">Концерт/выступление</span>
                </label>

                <label class="radio__label">
                  <input type="radio" name="format" value="exhibition" class="radio__input">
                  <span class="radio__mark"></span>
                  <span class="radio__name">Выставка/показ</span>
                </label>

                <label class="radio__label">
                  <input type="radio" name="format" value="other" class="radio__input">
                  <span class="radio__mark"></span>
                  <span class="radio__name">Другое</span>
                </label>
              </div>
            </div>

            <div class="form__group">
              <div class="form__field form__field--mb30 field">
                <h5 class="field__title">Планируемое количество посетителей:</h5>

                <select name="amount" class="field__select js-selectric">
                  <option value="20">до 20 человек</option>
                  <option value="100">от 20 до 100 человек</option>
                  <option value="500">от 100 до 500 человек</option>
                  <option value="1000">более 500 человек</option>
                </select>
              </div>

              <div class="form__field field js-dateField">
                <h5 class="field__title">Дата проведения:</h5>

                <div class="field__date">
                  <div class="field__date-inputs">
                    <input class="field__date-input js-dateDay" type="text" placeholder="ДД" readonly>
                    <input class="field__date-input js-dateMonth" type="text" placeholder="ММ" readonly>
                    <input class="field__date-input field__date-input--year js-dateYear" type="text" 
                          placeholder="ГГГГ" readonly>
                  </div>

                  <input class="field__date-picker js-dateInput" type="text" name="date" readonly required>
                </div>
              </div>
            </div>

            <div class="form__section">
              <h6 class="field__title">Контактные данные:</h6>

              <div class="form__list form__list--mb50">
                <label class="form__field form__field--w50 field ">
                  <span class="field__label">Имя*</span>
                  <input type="text" class="field__input" placeholder="Имя" name="name" required>
                </label>

                <label class="form__field form__field--w50 field ">
                  <span class="field__label">Фамилия*</span>
                  <input type="text" class="field__input" placeholder="Фамилия" name="surname" required>
                </label>

                <label class="form__field form__field--w50 field ">
                  <span class="field__label">Телефон*</span>
                  <input type="tel" class="field__input js-mobileMask" name="phone" required>
                </label>

                <label class="form__field form__field--w50 field ">
                  <span class="field__label">Email*</span>
                  <input type="email" class="field__input" placeholder="Email" name="email" required>
                </label>
              </div>

              <label class="form__field form__field--mb30 field">
                <span class="field__label field__label--textarea">Есть пожелания? Напишите нам:</span>
                <textarea class="field__textarea" name="wishes"></textarea>
              </label>

              <label class="form__check form__check--mb38 check">
                <span class="check__label check__label--fsz14">
                  Я соглашаюсь с пользовательским соглашением и с политикой использования персональных 
                  данных
                </span>
                <input type="checkbox" class="check__input" name="agreement" required checked>
                <span class="check__mark"></span>
              </label>

              <div class="form__btns">
                <button type="submit" class="form__submit-btn btn">Отправить</button>
                <button 
                  type="button" 
                  class="form__close-btn btn"
                  @click="closeModalPp"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useStore } from "~/store";

  const store = useStore();

  const { closeModalPp } = store;

  const isActive = computed(() => store.modal);
</script>

<style lang="less">
  .pp {
    position: fixed;
    box-sizing: border-box;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 90px 50px 50px;
    background-color: @gray;
    backdrop-filter: blur(25px);
    overflow-y: auto;
    z-index: 100;

    @supports(backdrop-filter: blur(25px)) {
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
      z-index: 1;

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