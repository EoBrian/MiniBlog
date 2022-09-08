import { useState, useEffect } from "react";

import { db } from "../firebase/config";

import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
  doc,
  deleteDoc
} from "firebase/firestore"

import { useAuthentication } from "./useAuthentication";


export const useFetchDocuments = (docCollection= "new-post", search= null, uid= null)=> {
  /*
  useFetchDocuments ---> search data with paraments:

  -- docCollection --> name document
  -- search --> return data from tagsArray of the one data
  -- uid --> return only one data from uid
  */
  const {checkIfIsCancelled} = useAuthentication()
  const [document, setDocument] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)



  //show posts
  useEffect(()=> {

    async function getPostsDB (){
      
      checkIfIsCancelled()

      setIsLoading(true)
      setError(null)
      

      const collectionRef = await collection(db, docCollection)

      try {
        let q

        //query        
        if (uid) {
          q = await doc(collectionRef, uid);          
        }else if (search){
          q = await query(collectionRef, where("tags", "array-contains", search), orderBy("createdAt", "desc"))
        } else {
          q = await query(collectionRef, orderBy("createdAt", "desc"))
        }
       
        await onSnapshot(q, (querySnapshot)=> setDocument(
          !uid ? 
            querySnapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
            :          
            {id: querySnapshot.id, ...querySnapshot.data()}          
        ))

      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(null)
      }
    }

    getPostsDB()

  },[docCollection, search, uid])


  //delele post with id
  const deleteDocument = async ()=> {
    try {
      await deleteDoc(doc(collectionRef, uid))
    } catch (error) {
      setError(error)
    }
  }

  return {
    deleteDocument,
    document,
    isLoading,
    error
  }
}