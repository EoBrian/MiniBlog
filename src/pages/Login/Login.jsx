import { useState } from "react"

import { Link } from "react-router-dom"

import { useLogin } from "../../hooks/useLogin"

const Login = () => {

  const {Login, loginError, loading} = useLogin()

  const [email, setEmail] = useState(undefined)
  const [password, setPassword] = useState(undefined)



  const handleSubmit = (e)=> {
    e.preventDefault()

    Login(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="legend">
        <h2>Logar em sua conta</h2>
      </div>

      <div className="fields">
        <label>
          E-mail
          <input type="email"
           required 
           onChange={(e)=> setEmail(e.target.value) } />
        </label>
      </div>

      <div className="fields">
        <label>
          Password
          <input type="password"
           required
           minLength={8}
           onChange={(e)=> setPassword(e.target.value)} />
        </label>
      </div>

      <div className="fields">
        <input type="submit" value="login" />
      </div>

      <div>
        <p>ainda não possui uma conta? <span><Link to="/registration">cadastre-se</Link></span></p>
      </div>

      {
        loading && (
          <div className="loading">
            <div className="circle"></div>
          </div>
        )
      }

      {
        loginError && (
          <div className="error-message">{loginError}</div>
        )
      }
    </form>
  )
}

export default Login