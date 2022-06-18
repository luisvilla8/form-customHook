import React, { useState } from 'react'

const initialValue = {
  name: "",
  lastName: "",
  password: ""
}

export const useForm = () => {
  const [inputValues, setInputValues] = useState(initialValue)

  const onChange = ({ target }) => {
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

  return {
    ...inputValues,
    onChange,
    onSubmit
  }
}
