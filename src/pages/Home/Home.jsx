//hoocks
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

//components
import Posts from "../../components/Posts/Posts"
import Query from "../../components/Query/Query"
import Loading from "../../components/Loading"

//css
import "./Home.css"


const Home = () => {

  const {document: posts, isLoading, error} = useFetchDocuments("new-post")
  const navigate = useNavigate()

  let isPosts = posts != null && posts.length == 0


  return (
    <>
      <Loading error={error} loading={isLoading}/>
      
      <Query />

      {posts && (<Posts posts={posts}/>)}
        
      {isPosts && (
        <>
          <h2>nenhum post por aqui!</h2>
          <button className="btn" onClick={()=> navigate("/create/post")}>Criar post</button>
        </>
      )}
      
    </>
  )
}

export default Home