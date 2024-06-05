import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";
import { setLocale } from "yup";

export const useValidationSchema = () => {
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

  const schema = toTypedSchema(
    yup.object({
      format: yup.string().required(),
      visitorAmount: yup.string().required(),
      date: yup.object().shape({
        day: yup.string().required(),
        month: yup.string().required(),
        year: yup.string().required(),
      }),
      name: yup.string().required(),
      surname: yup.string().required(),
      phone: yup.string().required(),
      email: yup.string().required().email(),
      agreement: yup.bool().oneOf([true], errorMessages.required),
    }),
  );

  return schema;
}