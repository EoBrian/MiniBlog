//hoocks
import {useParams} from "react-router-dom"
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

//components
import Loading from "../../components/Loading"

const Post = () => {

  const {id} = useParams()
  const {document:post, isLoading, error} = useFetchDocuments("new-post", null, null, id)
  
  
  return (
    <div>

      <Loading error={error} loading={isLoading}/>

      {post && (
        <>
          <figure>
            <img src={post.img} width="100%" alt="" />
          </figure>
          <p>{post.legend}</p>
        </>
      )}
    </div>
  )
}

export default Post