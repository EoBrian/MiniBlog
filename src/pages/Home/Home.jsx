//hoocks
import Posts from "../../components/Posts/Posts"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

//components


//css
import "./Home.css"


const Home = () => {

  const {document: posts} = useFetchDocuments("new-post")
  
  return (
    <article className="box d-flex">
      <Posts posts={posts}/>
    </article>
  )
}

export default Home