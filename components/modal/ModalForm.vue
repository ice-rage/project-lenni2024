<template>
  <form class="form">
    <div class="form__layout">
      <div class="form__section form-section form-section--w50">
        <h5 class="form-section__title">Формат мероприятия:</h5>

        <ModalRadio class="form-section__field"/>
      </div>

      <div class="form__group">
        <div class="form__section form-section">
          <h5 class="form-section__title">
            Планируемое количество посетителей:
          </h5>
          
          <ModalSelect class="form-section__field"/>
        </div>

        <div class="form__section form-section">
          <h5 class="form-section__title">Дата проведения:</h5>
          
          <ModalDatepicker class="form-section__field"/>
        </div>
      </div>
      
      <div class="form__section form-section">
        <h5 class="form-section__title">Контактные данные:</h5>

        <div v-if="contactLabels.length" class="form-section__list"
        >
          <ModalLabel 
            v-for="(contactLabel, contactLabelIndex) in contactLabels"
            :key="contactLabelIndex"
            class="form-section__field form-section__field--w50"
            :data="contactLabel"
          />
        </div>
      </div>

      <div class="form__section form-section">
        <h5 class="form-section__title">Есть пожелания? Напишите нам:</h5>

        <ModalTextarea class="form-section__field"/>
      </div>

      <ModalCheckbox class="form__check"/>

      <div class="form__btns">
        <button type="submit" class="form__submit-btn btn">Отправить</button>

        <button type="button" class="form__close-btn btn" @click="closeModalPp">
          Закрыть
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
  import { useStore } from "~/store";

  const store = useStore();

  const { closeModalPp } = store;

  const contactLabels = [
    {
      label: "Имя*",
      inputName: "name",
      inputPlaceholder: "Имя",
    },
    {
      label: "Фамилия*",
      inputName: "surname",
      inputPlaceholder: "Фамилия",
    },
    {
      inputType: "tel",
      label: "Телефон*",
      inputName: "phone",
      jsClass: "js-mobileMask",
    },
    {
      inputType: "email",
      label: "Email*",
      inputName: "email",
      inputPlaceholder: "Email",
    },
  ]
</script>

<style lang="less">
  .form {
    &__layout {
      .form-layout();

      & > .form-section {
        &:first-child {
          .form-section__title {
            @media @bw768 {
              font-size: 18px;
            }
          }
        }
      }
    }

    &__group {
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      width: calc(50% - 30px);

      @media @bw1340 {
        width: calc(50% - 1.953vw);
      }

      @media @bw650 {
        width: 100%;
        margin: 23px 0 29px 0;
      }
    }

    &__check {
      margin-bottom: 10px;

      @media @bw1020 {
        padding-left: 42px;
      }

      @media @bw768 {
        margin-top: 30px;
        padding-left: 40px;
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
        margin-top: 30px;
      }
    }

    &__submit-btn {
      width: 100%;
      max-width: 401px;
      padding: 13px 156px;
 
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