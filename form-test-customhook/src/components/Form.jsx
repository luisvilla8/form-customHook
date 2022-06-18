import React from 'react'
import { useForm } from '../hooks/useForm'

export const Form = () => {

  const {name, lastName, password, onChange, onSubmit } = useForm()

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" id="name" placeholder="Ingresa tu nombre"
        value={name}
        onChange={onChange}/>
      </div>
      <div>
        <label htmlFor="lastName">Apellidos:</label>
        <input type="text" name="lastName" id="lastName" placeholder="Ingresa tus apellidos"
        value={lastName}
        onChange={onChange}/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Ingresa tu password"
        value={password}
        onChange={onChange}/>
      </div>
      <input type="submit" value="Ingresar"/>
    </form>
  )
}
