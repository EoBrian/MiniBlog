//hoocks
import { useState } from "react"
import { useAuthentication } from "./useAuthentication"

//context
import { useAuthContext } from "../context/AuthContext"

//forebase
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../firebase/config"




export const useDataBase = (docName) => {

  const {user} = useAuthContext()

  const {checkIfIsCancelled} = useAuthentication() 

  const [isLoading, setIsLoading] = useState(null)
  const [errorDB, setErrorDB] = useState(null)
 


  const setPostDB = async (post)=> {
    checkIfIsCancelled()
    setErrorDB(null)
    setIsLoading(true)

    try {

      const docRef = await addDoc(collection(db, docName), {
        title: post.title,
        img: post.img,
        tags: post.tags,
        legend: post.legend,
        uid: user.uid,
        createdBy: user.displayName,
        createdAt: Timestamp.now(),
      })

      
    } catch (error) {
      setErrorDB(error.message);
    } finally {
      setIsLoading(false);
    }
  }


  return {
    setPostDB,
    isLoading,
    errorDB
  }
}
