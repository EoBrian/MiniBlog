import React from 'react'

const Login = () => {
  return (
    <form>
      <div className="legend">
        <h2>Logar em sua conta</h2>
      </div>

      <div className="fields">
        <label>
          Username
          <input type="text" />
        </label>
      </div>

      <div className="fields">
        <label>
          Password
          <input type="password" />
        </label>
      </div>

      <div className="fields">
        <input type="submit" value="login" />
      </div>
    </form>
  )
}

export default Login