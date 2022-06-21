import React, { useState } from 'react'

const initialValue = {
  name: "",
  email: "",
  password: ""
}

export const useForm = () => {
  const [inputValues, setInputValues] = useState(initialValue)

  const onInputChange = ({ target }) => {
    const { value, name} = target
    setInputValues({
      ...inputValues,
      [name] : value
    });
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    console.log(inputValues)
  }

  const reset = () => {
    setInputValues(initialValue)
  }

  return {
    ...inputValues,
    onInputChange,
    onSubmit,
    reset
  }
}
