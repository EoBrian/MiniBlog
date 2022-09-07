import {useParams} from "react-router-dom"
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Post = () => {

  const {id} = useParams()
  const {document:post, isLoading, error} = useFetchDocuments("new-post", null, id)
  
  
  if (isLoading) {
    return <div className="loading">
      <div className="circle"></div>
    </div>
  }

  return (
    <div>
      {post && (
        <>
          <h2>{post.title}</h2>
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