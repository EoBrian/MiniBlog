import { useState, useEffect } from "react"

//forebase
import { collection, addDoc } from "firebase/firestore"
import { db } from "../firebase/config"


export const useDataBase = () => {

  const [isLoading, setIsLoading] = useState(null)
  

  const setPostDB = async (post)=> {
  
    setIsLoading(true)

    try {

      const docRef = await addDoc(collection(db, "new-post"), {
        title: post.title,
        img: post.img,
        legend: post.legend
      })

      console.log(docRef.id)
      
    } catch (error) {
      console.log(typeof error.message)
      console.log(error.message)

    } finally {
      console.log("finalmete")
      setIsLoading(false)
    }
  }

  console.log(isLoading)

  return {
    setPostDB,
    isLoading
  }
}
