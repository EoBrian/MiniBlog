//hoocks
import { useState, useEffect } from "react"
import { useAuthentication } from "./useAuthentication"
import { useNavigate } from "react-router-dom"

//context
import { useAuthContext } from "../context/AuthContext"

//forebase
import { collection, addDoc, Timestamp, doc, deleteDoc } from "firebase/firestore"
import { db } from "../firebase/config"



export const useDataBase = (docName) => {
  
  const {user} = useAuthContext()

  const {checkIfIsCancelled} = useAuthentication() 

  const [isLoading, setIsLoading] = useState(null)
  const [errorDB, setErrorDB] = useState(null)
  const navigate = useNavigate()


  const setPostDB = async (post)=> {
    checkIfIsCancelled()
    setErrorDB(null)
    setIsLoading(true)

    try {

      await addDoc(collection(db, docName), {
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

  //delele post with id
  const deleteDocument = async (id_post)=> {
    checkIfIsCancelled()
    setErrorDB(null)
    setIsLoading(true)

    try {
      await deleteDoc(doc(collection(db, docName), id_post))
      navigate("/dashboard")
    } catch (error) {
      setErrorDB(error.message)
    } finally {
      setIsLoading(false)
    }
  }

 
  return {
    deleteDocument,
    setPostDB,
    isLoading,
    errorDB,
  }
}
