import { setLocale } from "yup";

export const useCustomErrorMessages = () => {
  const errorMessages = {
    required: "Это поле обязательно",
    email: "Пожалуйста, введите корректный e-mail",
  };

  setLocale({
    mixed: {
      required: errorMessages.required,
    },
    string: {
      email: errorMessages.email,
    },
  });

  return errorMessages;
}