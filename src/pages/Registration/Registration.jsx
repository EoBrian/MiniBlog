import "./Registration.css"
import { useEffect, useState } from 'react'

//react-hook-form
import { useForm } from "react-hook-form"

//custom hoocks
import { useAuthentication } from "../../hooks/useAuthentication"

const Registration = () => {

  const { error: AuthError, loading, createUser } = useAuthentication()
  const [error, setError] = useState(null)

  const { register, handleSubmit } = useForm()


  const onSubmit = async data => {
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

    const response = await createUser(data)
    console.log(data) 
    
  }

  useEffect(()=> {
    if(AuthError) {
      setError(AuthError)
    }
  }, [AuthError])


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

      {
        loading && (
          <div className="loading">
            <div className="circle"></div>
          </div>
        )
      }
    </form>
  )
}

export default Registration