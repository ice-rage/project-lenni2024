export const useOnSubmit = (formValues, resetFunction) => {
  const store = useMainStore();

  const { notifySuccess, notifyError } = store;

  return $fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: formValues,
  }).then(
    (response) => {
      resetFunction();
      notifySuccess();

      console.log(response);

      return true;
    },
    (error) => {
      notifyError();

      console.log("Произошла ошибка: ", error);

      return false;
    }
  );
};
