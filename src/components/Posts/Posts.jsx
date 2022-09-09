import { useNavigate } from "react-router-dom"


const Posts = ({posts, user_id}) => {

  const navigate = useNavigate()  

  return (
    <>
      <ul className="box-post">
        {posts.map((e)=> (
          <li key={e.id}  className='posts' >


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

            
            <button className="btn" onClick={()=> navigate(`/post/${e.id}`)}>{user_id ? "editar" : "ver-mais"}</button>
            
            <div className="clear"></div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Posts