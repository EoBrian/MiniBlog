//hoocks
import { useAuthContext } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

//components
import Posts from '../../components/Posts/Posts'
import Loading from '../../components/Loading'

//css
import "./DashBoard.css"

const DashBoard = () => {
  const {user} = useAuthContext()
  const {document:posts, isLoading, error} = useFetchDocuments("new-post", null, user.uid)
  
  return (
    <article className='box'>
      <Loading error={error} loading={isLoading}/>
      <div className="user">
        <figure>
          <img width={40} src={user.photoURL ? user.photoURL : "https://freesvg.org/img/abstract-user-flat-1.png"} alt="" />
        </figure>
        <p><em>{user.displayName}</em></p>
      </div>

      <h2>Edite aqui os seus posts</h2>
      {posts && <Posts user_id={user.uid} posts={posts}/>}
    </article>
  )
}

export default DashBoard