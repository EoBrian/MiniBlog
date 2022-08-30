import "./Registration.css"
import React, { useState } from 'react'

//react-hook-form
import { useForm } from "react-hook-form"

const Registration = () => {

  const [error, setError] = useState(null)

  const { register, handleSubmit, formState: { errors } } = useForm()


  const onSubmit = data => {
    setError(""); //reset error

    /*
    if password ! confirmPassword 
    return --> error

    else
    return --> data
    */
    if (data.password != data.confirmPassword) {
      setError("senhas incompativeis");
      return
    }

    console.log(data);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="legend">
        <h2>Registrese-se para começar a publicar</h2>
      </div>
      <div className="fields">
        <label>
          Usuário
          <input type="text" required {...register("username")} />
        </label>
      </div>

      <div className="fields">
        <label>
          E-mail
          <input type="email" required {...register("email")} />
        </label>
      </div>

      <div className="fields">
        <label>
          Senha
          <input type="password" minLength={8} required {...register("password")}/>
        </label>
      </div>

      <div className="fields">
        <label>
          Confirme sua senha
          <input type="password" required {...register("confirmPassword")}/>
        </label>
      </div>

      <div className="fields">
        <input type="submit" value="registrar" />
      </div>

      {error && (<p className="error">{error}</p>)}
    </form>
  )
}

export default Registration