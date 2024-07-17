<template>
  <form novalidate class="event-pp-form" @submit="onSubmit">
    <div class="event-pp-form__layout">
      <FormSection 
        class="event-pp-form__section form-section--w50" 
        title="Формат мероприятия"
        name="formats"
      />

      <div class="event-pp-form__group">
        <FormSection 
          class="event-pp-form__section" 
          title="Планируемое количество посетителей"
          name="visitors"
        />

        <FormSection 
          class="event-pp-form__section" 
          title="Дата проведения"
          name="date"
        />
      </div>
      
      <div class="event-pp-form__section form-section">
        <FormSection 
          class="event-pp-form__section" 
          title="Контактные данные"
          name="contacts"
          :items="eventContacts"
          componentClass="form-section__field--w50"
        />
      </div>

      <FormSection 
        class="event-pp-form__section" 
        title="Есть пожелания? Напишите нам"
        name="wishes"
      />

      <FormCheckbox
        label="Я соглашаюсь с пользовательским соглашением и с политикой 
          использования персональных данных"
        class="event-pp-form__checkbox"
      />

      <div class="event-pp-form__btns">
        <button type="submit" class="event-pp-form__submit-btn btn">
          Отправить
        </button>

        <button 
          type="button" 
          class="event-pp-form__close-btn btn" 
          @click="closeEventPp"
        >
          Закрыть
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
  import eventContacts from "~/data/eventPp/contacts.json";
  import FormCheckbox from "~/components/form/FormCheckbox.vue";
  import { useForm } from "vee-validate";
  import { useEventPpFormSchema } from 
    "~/composables/eventPpFormSchema";
  import { useOnSubmit } from "~/composables/onSubmit";

  const { handleSubmit } = useForm({
    validationSchema: useEventPpFormSchema(),
    initialValues: {
      date: {
        day: "",
        month: "",
        year: "",
      },
      name: "",
      surname: "",
      phone: "",
      email: "",
      agreement: true,
    },
  });

  const store = useMainStore();

  const { closeEventPp } = store;

  const onSubmit = handleSubmit(async (values, { resetForm }) => {
    const submitResult = await useOnSubmit(values, resetForm);

    if (submitResult) {
      closeEventPp();
    }
  });
</script>

<style lang="less">
  .event-pp-form {
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

    &__checkbox {
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