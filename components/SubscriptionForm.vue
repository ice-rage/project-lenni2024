<template>
  <VeeForm
    class="subscription-form"
    :validationSchema="schema"
    @submit="useOnSubmit"
  >
    <h4 class="subscription-form__title">
      Подпишись и будь в курсе происходящего
    </h4>

    <div class="subscription-form__wrapper">
      <div class="subscription-form__input-wrapper">
        <VeeField
          v-model="userEmail"
          type="email"
          name="email"
          placeholder="E-mail"
          class="subscription-form__input"
        />
      </div>

      <button type="submit" class="subscription-form__submit-btn">
        Подписаться
      </button>
    </div>

    <VeeErrorMessage
      name="email" 
      class="subscription-form__error-message"
    />

    <FormCheckbox
      label="Согласен на обработку персональных данных"
      :fontWeight="300"
      class="subscription-form__check"
    />
  </VeeForm>
</template>

<script setup>
  import FormCheckbox from "~/components/form/FormCheckbox.vue";
  import { useSubscriptionFormSchema } from 
    "~/composables/subscriptionFormSchema";
  import { useOnSubmit } from "~/composables/onSubmit";
  
  const schema = useSubscriptionFormSchema();
  const userEmail = ref("");
</script>

<style lang="less">
  .subscription-form {
    &__title {
      margin: 0 0 14px 6px;
      font-weight: 600;

      @media @bw1660 {
        margin-left: -16px;
      }

      @media @bw1020 {
        margin: 0 0 24px;
      }

      @media @bw768 {
        margin-bottom: 14px;
        font-weight: 400;
        font-size: 13px;
      }
    }

    &__wrapper {
      display: flex;
      width: 100%;
      margin-bottom: 15px;
    }

    &__input-wrapper {
      width: 100%;
    }
    
    &__input {
      box-sizing: border-box;
      width: 100%;
      padding: 15px 15px 15px 28px;
      border: none;
      background-color: @white;
      color: @black;
      font-size: 14px;
      line-height: 1.362;

      @media @bw768 {
        padding: 17px 15px 13px 20px;
      }

      @media @bw768 {
        font-size: 12px;
      }
    }

    &__error-message {
      .error-message();
    }

    &__submit-btn {
      box-sizing: border-box;
      display: inline-block;
      max-height: 49px;
      padding: 15px 23px;
      border: none;
      border-radius: 0;
      background-color: @black;
      color: @white;
      font-size: 14px;
      transition: background-color 0.2s;

      @media @bw768 {
        max-height: 46px;
        font-size: 12px;
      }

      @media @bw450 {
        padding: 15px 20px;
      }

      &:hover {
        @media (hover: hover) {
          background-color: @red_A5;
        }
      }

      &:active {
        background-color: @red_A5;
      }
    }

    &__checkbox {
      .form-checkbox__label--fsz14 {
        @media @bw768 {
          padding-top: 0;
        }
      }
    }

    &__checkbox .form-checkbox__mark {
      @media @bw768 {
        top: calc(50% - 12px);
      }
    }
  }
</style>