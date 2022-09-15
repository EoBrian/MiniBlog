//hoocks
import { useEffect, useState } from "react"
import {Navigate, useNavigate, useParams} from "react-router-dom"
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useDataBase } from "../../hooks/useDataBase"
import { useAuthContext } from "../../context/AuthContext"

//components
import Loading from "../../components/Loading"

//assets
import editPost from "../../assets/pencil-outline.svg"
import deletePost from "../../assets/trash-outline.svg"


const Post = () => {
  const {user} = useAuthContext()
  const {id} = useParams()
  const {document:post, isLoading, error} = useFetchDocuments("new-post", null, null, id)
  const {deleteDocument, isLoading:loadingDB, errorDB} = useDataBase("new-post")
  const [isUser, setIsUser] = useState(null)
  const navigate = useNavigate()

  useEffect(()=> {
    if (post && post.uid == user.uid) {
      setIsUser(true)
    } else {
      setIsUser(false)
    }
  }, [user, id, post])
  
  
  return (
    <>
      <Loading error={error || errorDB} loading={isLoading || loadingDB}/>

      {isUser && (
        <div className="edit-post">
          <button className="btn" onClick={()=> deleteDocument(post.id)}>
            <img width={15} src={deletePost} alt="delete-post icon" />
          </button>

          <button className="btn">
            <img width={15} src={editPost} alt="edit-post icon" onClick={()=>navigate(`/edit/post/${post.id}`)} />
          </button>
        </div>
      )}      

      {post && (
        <>
          <figure>
            <img src={post.img} width="100%" />
          </figure>
          <p>{post.legend}</p>
        </>
      )}
    </>
  )
}

export default Post