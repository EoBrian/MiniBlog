//hoocks
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

//components
import Posts from "../../components/Posts/Posts"

//css
import "./Home.css"




const Home = () => {

  const {document: posts, isLoading, error} = useFetchDocuments("new-post")
  
  const navigate = useNavigate()

  let isPosts = posts != null && posts.length == 0

  if (isLoading) {
    return <div className="loading">
      <div className="circle"></div>
    </div>
  }


  return (
    <article className="box">

      <form>        
        <input type="text" placeholder="pesquise por tags" />
        <span>
          <button className="btn">
            pesquisar
          </button>          
        </span>
      </form>

      {error && (
        <div className="error-message">{error}</div>
      )}

      {posts && (<Posts posts={posts}/>)}
        
      {isPosts && (
        <>
          <h2>nenhum post por aqui!</h2>
          <button className="btn" onClick={()=> navigate("/create/post")}>Criar post</button>
        </>
      )}
      

    </article>
  )
}

export default Home