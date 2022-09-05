import { useState, useEffect } from "react";

import { db } from "../firebase/config";

import {
  collection,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  where,

} from "firebase/firestore"

import { useAuthentication } from "./useAuthentication";


export const useFetchDocuments = (docCollection= "new-post", search= null, uid= null)=> {

  const {checkIfIsCancelled} = useAuthentication()
  const [document, setDocument] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)


  useEffect(()=> {

    const getPostsDB = async ()=> {
      
      checkIfIsCancelled()

      setIsLoading(true)
      setError(null)

      const collectionRef = await collection(db, docCollection)
      
      try {

        await onSnapshot(collectionRef, (doc)=> {
            setDocument(
              doc.docs.map((e)=> ({
                id: e.id,
                ...e.data()
              }))      
            )
        })

        //query
        //dashboard

        
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(null)
      }
    }

    getPostsDB()

  },[docCollection, search, uid])


  return {
    document,
    isLoading,
    error
  }
}