import { defineRule } from "vee-validate";

export default defineNuxtPlugin((nuxtApp) => {
  defineRule("required", value => {
    if (!value || !value.length) {
      return "Это поле обязательно";
    }
    
    return true;
  });

  defineRule("email", value => {

    if (!value || !value.length) {
      return true;
    }

    if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
      return "Пожалуйста, введите корректный e-mail";
    }
    return true;
  });
});