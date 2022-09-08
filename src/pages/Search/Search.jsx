//components
import Query from "../../components/Query/Query"
import Posts from "../../components/Posts/Posts"
//hoocks
import { useQuery } from "../../hooks/useQuery"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

const Search = () => {
  const query = useQuery()
  const {document: posts, isLoading, error} = useFetchDocuments("new-post", query.get("q"))

  if (isLoading) {
    return <div className="loading">
      <div className="circle"></div>
    </div> 
  }

  return (
    <article className="box">

      {error && (
        <div className="error-message">{error}</div>
      )}

      <Query value={query.get("q")}/>
      
      {posts ? <Posts posts={posts}/> : (<p>Nenhuma postagem sobre: <strong>{query.get("q")}</strong></p>)}
    </article>
  )
}

export default Search