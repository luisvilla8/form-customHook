import React from 'react'
import { useForm } from '../../hooks/useForm'
import FormStyle from './Form.module.css'

export const Form = () => {

  const {name, email, password, onInputChange, onSubmit, reset } = useForm()

  return (
    <form onSubmit={onSubmit} className={FormStyle.container}>
      <div className={FormStyle.input__group}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" id="name" placeholder="Ingresa tu nombre"
        value={name}
        onChange={onInputChange}
        autoComplete="nope"/>
      </div>
      <div className={FormStyle.input__group}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="Ingresa tu email"
        value={email}
        onChange={onInputChange}
        autoComplete="nope"/>
      </div>
      <div className={FormStyle.input__group}>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Ingresa tu password"
        value={password}
        onChange={onInputChange}
        autoComplete="nope"/>
      </div>
      <a href="#" onClick={ () => reset() }>Reset</a>
      <input type="submit" value="Ingresar"/>
    </form>
  )
}
