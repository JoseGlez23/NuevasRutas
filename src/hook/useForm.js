import { useState } from "react";

export const useForm = (inicialForm = {}) => {
  const [formState, setFormState] = useState(inicialForm);

  const onInPutChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const onResetForm = () => {
    setFormState(inicialForm);
  };
  return {
    ...formState,
    formState,
    onInPutChange,
    onResetForm,
  };
};

export default useForm;
