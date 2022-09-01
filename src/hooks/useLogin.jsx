import { useState } from "react"

import { useAuthentication } from "./useAuthentication"

import { signInWithEmailAndPassword } from "firebase/auth"


export const useLogin = () => {
  
  const [loginError, setLoginError] = useState(null)
  const [loading, setLoading] = useState(null)

  const {auth, checkIfIsCancelled} = useAuthentication()


  const Login = async (email, password)=> {
    checkIfIsCancelled()
    setLoading(true)

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
  
    } catch (error) {

      setLoginError(error.message)

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
