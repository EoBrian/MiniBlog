import { useState } from "react"

//forebase
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import { useAuthentication } from "./useAuthentication"


export const useDataBase = (docName) => {

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
        legend: post.legend
      })

      console.log(docRef.id);
      
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
