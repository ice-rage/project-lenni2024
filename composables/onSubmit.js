export const useOnSubmit = (values, { resetForm }) => {
  const store = useStore();

  const { notifySuccess, notifyError } = store;

  return $fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: values,
  })
  .then(response => {
    resetForm();
    notifySuccess();

    console.log(response);

    return true;
  }, error => {
    notifyError();

    console.log("Произошла ошибка: ", error);

    return false;
  });
}