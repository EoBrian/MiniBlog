//hoocks
import Posts from "../../components/Posts/Posts"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

//components


//css
import "./Home.css"


const Home = () => {

  const {document: posts} = useFetchDocuments("new-post")
  
  return (
    <div className="box">
      <div className="post">
        <h2 className="title-post">Hello World!</h2>
        <figure>
          <img className="img-post" src="https://cdn.pixabay.com/photo/2022/08/15/02/07/park-7386978_960_720.jpg" alt="" />
        </figure>
        <p className="leg-post">Compartilhe a melhor versão de você mesmo!</p>
      </div>

      <Posts posts={posts}/>
      
    </div>
  )
}

export default Home