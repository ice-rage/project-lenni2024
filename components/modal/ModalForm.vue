<template>
  <form class="form">
    <div class="form__list">
      <div class="form__field form__field--w50 field">
        <h5 class="field__title">Формат мероприятия:</h5>

        <ModalRadio :class="'field__radio'" :data="radioData"/>
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
              <input
                class="field__date-input js-dateDay"
                type="text"
                placeholder="ДД"
                readonly
              />
              <input
                class="field__date-input js-dateMonth"
                type="text"
                placeholder="ММ"
                readonly
              />
              <input
                class="field__date-input field__date-input--year js-dateYear"
                type="text"
                placeholder="ГГГГ"
                readonly
              />
            </div>

            <input
              class="field__date-picker js-dateInput"
              type="text"
              name="date"
              readonly
              required
            />
          </div>
        </div>
      </div>

      <div class="form__section">
        <h6 class="field__title">Контактные данные:</h6>

        <div class="form__list form__list--mb50">
          <label class="form__field form__field--w50 field">
            <span class="field__label">Имя*</span>
            <input
              type="text"
              class="field__input"
              placeholder="Имя"
              name="name"
              required
            />
          </label>

          <label class="form__field form__field--w50 field">
            <span class="field__label">Фамилия*</span>
            <input
              type="text"
              class="field__input"
              placeholder="Фамилия"
              name="surname"
              required
            />
          </label>

          <label class="form__field form__field--w50 field">
            <span class="field__label">Телефон*</span>
            <input
              type="tel"
              class="field__input js-mobileMask"
              name="phone"
              required
            />
          </label>

          <label class="form__field form__field--w50 field">
            <span class="field__label">Email*</span>
            <input
              type="email"
              class="field__input"
              placeholder="Email"
              name="email"
              required
            />
          </label>
        </div>

        <label class="form__field form__field--mb30 field">
          <span class="field__label field__label--textarea"
            >Есть пожелания? Напишите нам:</span
          >
          <textarea class="field__textarea" name="wishes"></textarea>
        </label>

        <label class="form__check form__check--mb38 check">
          <span class="check__label check__label--fsz14">
            Я соглашаюсь с пользовательским соглашением и с политикой
            использования персональных данных
          </span>
          <input
            type="checkbox"
            class="check__input"
            name="agreement"
            required
            checked
          />
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
</template>

<script setup>
  import { useStore } from "~/store";

  const store = useStore();

  const { closeModalPp } = store;

  const radioData = [
    {
      name: "format",
      value: "seminar",
      label: "Мастер-класс/семинар",
    },
    {
      name: "format",
      value: "concert",
      label: "Концерт/выступление",
    },
    {
      name: "format",
      value: "exhibition",
      label: "Выставка/показ",
    },
    {
      name: "format",
      value: "other",
      label: "Другое",
    },
  ];
</script>

<style lang="less">
  .form {
    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 30px 60px;
      width: 100%;

      &--mb50 {
        margin-bottom: 50px;

        @media @bw650 {
          margin-bottom: 20px;
        }
      }

      @media @bw1340 {
        gap: 3.906vw;
      }

      @media @bw650 {
        gap: 0;
      }
    }

    &__field {
      display: block;
      width: 100%;

      &--w50 {
        width: calc(50% - 30px);

        @media @bw1340 {
          width: calc(50% - 1.953vw);
        }

        @media @bw650 {
          width: 100%;
          margin-bottom: 30px;
          font-weight: 400;
        }
      }

      &--mb30 {
        margin-bottom: 30px;
      }
    }

    &__group {
      width: calc(50% - 30px);

      @media @bw1340 {
        width: calc(50% - 1.953vw);
      }

      @media @bw650 {
        width: 100%;
        margin: 23px 0 30px 0;
      }

      .field__title {
        @media @bw650 {
          font-size: 16px;
        }
      }
    }

    &__section {
      display: block;
      width: 100%;

      .field__title,
      .field__label--textarea {
        @media @bw650 {
          font-size: 16px;
        }
      }
    }

    &__check {
      &--mb38 {
        margin-bottom: 38px;

        @media @bw1020 {
          padding-left: 42px;
        }

        @media @bw768 {
          padding-left: 40px;
        }
      }
    }

    &__btns {
      display: flex;
      align-items: center;
      gap: 200px;

      @media @bw1340 {
        gap: 15.104vw;
      }

      @media @bw650 {
        flex-direction: column;
        gap: 30px;
      }
    }

    &__submit-btn {
      width: 100%;
      max-width: 401px;
      max-height: 50px;
      padding: 15px 156px;

      @media @bw1340 {
        width: 37.63vw;
        padding: 15px 100px;
      }

      @media @bw650 {
        width: 100%;
        max-height: 49px;
        padding: 15px 81px;
      }
    }

    &__close-btn {
      border: none;
      outline: none;
      padding: 4px 1px;
      text-decoration: underline;

      @media @bw650 {
        padding: 5px 40px;
      }

      &:hover {
        @media(hover: hover) {
          background-color: initial;
          color: @red_A5;
        }
      }
    }
  }
</style>