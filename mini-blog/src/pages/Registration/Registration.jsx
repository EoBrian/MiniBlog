import "./Registration.css"
import React from 'react'

const Registration = () => {
  return (
    <form>
      <div className="legend">
        <h2>Registrese-se para começar a publicar</h2>
      </div>
      <div className="fields">
        <label>
          Usuário
          <input type="text" />
        </label>
      </div>

      <div className="fields">
        <label>
          E-mail
          <input type="email" />
        </label>
      </div>

      <div className="fields">
        <label>
          Senha
          <input type="password" />
        </label>
      </div>

      <div className="fields">
        <label>
          Confirme sua senha
          <input type="password" />
        </label>
      </div>

      <div className="fields">
        <input type="submit" value="registrar" />
      </div>
    </form>
  )
}

export default Registration