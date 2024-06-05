import { toTypedSchema } from "@vee-validate/yup";
import { useCustomErrorMessages } from "./customValidationMessages";
import * as yup from "yup";

export const useEventPpValidationSchema = () => {
  const errorMessages = useCustomErrorMessages();

  const schema = toTypedSchema(
    yup.object({
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