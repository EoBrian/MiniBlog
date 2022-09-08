import { useNavigate } from "react-router-dom"

//assets
import editPost from "../../assets/pencil-outline.svg"
import deletePost from "../../assets/trash-outline.svg"
import { useDataBase } from "../../hooks/useDataBase"
import Loading from "../Loading"

const Posts = ({posts, user_id}) => {

  const navigate = useNavigate()

  const {deleteDocument, isLoading, errorDB} = useDataBase("new-post")

  return (
    <div>

      <Loading loading={isLoading} error={errorDB}/>

      <ul className="box-post">
        {posts.map((e)=> (
          <li key={e.id}  className='posts' >

            {user_id && (
              <div className="edit-post">
                <button className="btn" onClick={()=> deleteDocument(e.id)}>
                  <img width={15} src={deletePost} alt="delete-post icon" />
                </button>

                <button className="btn">
                  <img width={15} src={editPost} alt="edit-post icon" />
                </button>
              </div>
            )}

            <figure>
              <img className="img=post" width="100%" src={e.img}/>
            </figure>
            
            {!user_id && <p><em>{e.createdBy}</em></p>}
            
            <p className="leg-post">{e.legend}</p>

            <ul>
              {e.tags && e.tags.map((tag, i)=> (                
                <li className="tags" key={i}>
                  <p  onClick={()=> navigate(`/search?q=${tag}`)}><span>#</span>{tag}</p>
                </li>                
              ))}
            </ul>

            {
              !user_id && <button className="btn" onClick={()=> navigate(`/post/${e.id}`)}>Ver mais</button>
            }
            <div className="clear"></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts