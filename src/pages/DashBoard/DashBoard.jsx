//hoocks
import { useAuthContext } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useNavigate } from 'react-router-dom'

//components
import Posts from '../../components/Posts/Posts'
import Loading from '../../components/Loading'

//css
import "./DashBoard.css"


const DashBoard = () => {
  const {user} = useAuthContext()
  const {document:posts, isLoading, error} = useFetchDocuments("new-post", null, user.uid)
  const navigate = useNavigate()

  return (
    <>
      <Loading error={error} loading={isLoading}/>
      <div className="user">
        <figure>
          <img width={40} src={user.photoURL ? user.photoURL : "https://freesvg.org/img/abstract-user-flat-1.png"} alt="" />
        </figure>
        <p><em>{user.displayName}</em></p>
      </div>

      
      {posts ? (
        <>
          <p>Você possui <strong>{posts.length}</strong> {posts.length == 1 ? "publicação" : "publicações"}</p>
          <Posts user_id={user.uid} posts={posts}/>
        </>
      ) : (
        <>
          <p>Nenum post ainda</p>
          <button className="btn" onClick={()=> navigate("/create/post")}>Criar post</button>
        </>
      )}
    </>
  )
}

export default DashBoard