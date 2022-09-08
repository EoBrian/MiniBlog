import { useState, useEffect } from "react";

import { db } from "../firebase/config";

import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
  doc,
} from "firebase/firestore"

import { useAuthentication } from "./useAuthentication";
import { useDataBase } from "./useDataBase";


export const useFetchDocuments = (docCollection= "new-post", search=null, uid=null, id_post=null)=> {
  /*
  useFetchDocuments ---> search data with paraments:

  -- docCollection --> name document
  -- search --> return data from tagsArray of the one data
  -- uid --> return post with user id == user.uid
  -- id_post --> return only one data from uid
  */
  const {checkIfIsCancelled} = useAuthentication()
  const [document, setDocument] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)
  const {load} = useDataBase(docCollection)


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
          q = await query(collectionRef, where("uid", "==", uid), orderBy("createdAt", "asc"));
        } else if (id_post) {
          q = await doc(collectionRef, id_post);
        }else if (search){
          q = await query(collectionRef, where("tags", "array-contains", search), orderBy("createdAt", "desc"))
        } else {
          q = await query(collectionRef, orderBy("createdAt", "desc"))
        }
       
        await onSnapshot(q, (querySnapshot)=> setDocument(
          !id_post ? 
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

  },[docCollection, search, uid, id_post, load])


  return {
    document,
    isLoading,
    error
  }
}