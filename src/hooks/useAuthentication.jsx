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
  const [isLogged, setIsLogged] = useState(false)
  
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

      setIsLogged(true)

      return user

    } catch (error) {

      setError(error.message)

    } finally {

      setLoading(false)

      useEffect(()=> {
        setCancelled(true)
      },[])

    }   
  }

  return {
    auth,
    error,
    loading,
    isLogged,
    createUser
  }
}
