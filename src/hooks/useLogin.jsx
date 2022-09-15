import { useState } from "react"

import { useAuthentication } from "./useAuthentication"

import { signInWithEmailAndPassword } from "firebase/auth"


export const useLogin = () => {
  
  const [loginError, setLoginError] = useState(null)
  const [loading, setLoading] = useState(null)

  const {auth, checkIfIsCancelled} = useAuthentication()


  const Login = async (email, password)=> {
    setLoginError(null)
    checkIfIsCancelled()
    setLoading(true)

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
  
    } catch (error) {

      if (error.message.includes("auth/user-not-found" || "auth/wrong-password")) {
        setLoginError("email/senha incorretos!")
      }else {
        setLoginError("ocorreu um erro! tente novamente mais tarde!")
      }
      

    } finally {

      setLoading(false)

    }
  }


  return {
    loginError,
    loading,
    Login
  }
}
