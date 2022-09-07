import React from 'react'
import { useState } from 'react'
import Posts from '../../components/Posts/Posts'

import { useAuthContext } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'


const DashBoard = () => {
  const {user} = useAuthContext()
  const {document:posts} = useFetchDocuments("new-post", user.uid)

  return (
    <div>
      <p>Olá {user.displayName}!</p>
      <h2>Edite aqui os seus posts</h2>
      {
        posts && <Posts posts={posts}/>
      }
    </div>
  )
}

export default DashBoard