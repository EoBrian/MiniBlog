import { useState, useEffect } from 'react'

import { db } from '../firebase/config'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut
} from "firebase/auth"


export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  
  /*
  cleanup
  deal with memory leak
  */
  const [cancelled, setCancelled] = useState(false)

  const auth = getAuth()


  function checkIfIsCancelled () {
    if (cancelled) {
      return
    }
  }


  const createUser = async (data)=> {
    checkIfIsCancelled()
    setLoading(true)
    setError(null)

    try {
      
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await updateProfile(user, {
        displayName: data.username
      })


      return user


    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message)

      let systemErrorMessage

      if (error.message.include("Password")) {
        systemErrorMessage = "A senha precisar conter no minimo 6 caracteres!"
      } else if (error.message.include("email-alredy")) {
        systemErrorMessage = "E-mail já cadastrado!"
      } else {
        systemErrorMessage = "Houve um erro no sistema! Tente novamente mais tarde!"
      }

      setError(systemErrorMessage)

    }

    setLoading(null)

    useEffect(()=> {
      return ()=> setCancelled(true)
    },[])
  }

  return {
    auth,
    error,
    loading,
    createUser
  }
}
