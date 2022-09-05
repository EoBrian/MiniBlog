//hoocks
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

//components
import Posts from "../../components/Posts/Posts"

//css
import "./Home.css"


const Home = () => {

  const {document: posts, isLoading, error} = useFetchDocuments("new-post")
  
  if (isLoading) {
    return <div className="loading">
      <div className="circle"></div>
    </div>
  }

  return (
    <article className="box d-flex">

        {
          error && (
            <div className="error-message">{error}</div>
          )
        }

      <Posts posts={posts}/>
      
    </article>
  )
}

export default Home