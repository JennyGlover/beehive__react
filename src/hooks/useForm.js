import { useState } from "react";

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    //name and value of the input
    const { value, name } = e.target;
    //Dynamically setting the key in the object
    setValues({ ...values, [name]: value });
  };

  //reseting the form
  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, setValues, handleChange, resetForm };
}

export default useForm;
