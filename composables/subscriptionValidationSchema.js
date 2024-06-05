import { toTypedSchema } from "@vee-validate/yup";
import { useCustomErrorMessages } from "./customValidationMessages";
import * as yup from "yup";

export const useSubscriptionValidationSchema = () => {
  const errorMessages = useCustomErrorMessages();

  const schema = toTypedSchema(
    yup.object({
      email: yup.string().required().email(),
      agreement: yup.bool().oneOf([true], errorMessages.required),
    }),
  );

  return schema;
}