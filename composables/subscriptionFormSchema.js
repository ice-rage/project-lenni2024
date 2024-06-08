import { toTypedSchema } from "@vee-validate/yup";
import { useCustomErrorMessages } from "./customErrorMessages";
import * as yup from "yup";

export const useSubscriptionFormSchema = () => {
  const errorMessages = useCustomErrorMessages();

  const schema = toTypedSchema(
    yup.object({
      email: yup.string().required().email(),
      agreement: yup.bool().oneOf([true], errorMessages.required),
    }),
  );

  return schema;
}