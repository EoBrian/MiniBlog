import React from 'react'

let year = new Date().getFullYear()

const FooterApp = () => {
  return (
    <div>
      <h5>Escreva sobre o que você tem interesse!</h5>
      <br />
      <p>Mini Blog &copy; {year}</p>
    </div>
  )
}

export default FooterApp