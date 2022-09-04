import { useState, useEffect } from 'react'

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut
} from "firebase/auth"


export const useAuthentication = () => {

  const auth = getAuth()

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  
  /*
  cleanup
  deal with memory leak
  */
  const [cancelled, setCancelled] = useState(false)

 
  function checkIfIsCancelled () {
    if (cancelled) {
      return
    }
  }


  const createUser = async (data)=> {
    /*
    this function: try create user

    if user existent --> error
    else --> create user
    */

    //clear memory cache
    checkIfIsCancelled()

    //loading while try create user
    setLoading(true)

    //if existent error
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

      setError(error.message)

    } finally {

      setLoading(false) //stop loading

      useEffect(()=> {
        setCancelled(true)
      },[])

    }

  }

   //logout - sign out
   const signOutUser = ()=> {
    checkIfIsCancelled()

    signOut(auth)
  }


  return {
    auth,
    error,
    loading,
    createUser,
    signOutUser,
    checkIfIsCancelled
  }
}
