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

      <Query />
      {posts && <Posts posts={posts}/>}
    </article>
  )
}

export default Search