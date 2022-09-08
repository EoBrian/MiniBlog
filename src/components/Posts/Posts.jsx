import { useNavigate } from "react-router-dom"


const Posts = ({posts}) => {

  const navigate = useNavigate()

  return (
    <div>
      <ul className="box-post">
        {posts.map((e)=> (
          <li key={e.id}  className='posts' >

            <figure>
              <img className="img=post"
                width="100%"
                src={e.img}
                alt={e.title} />
            </figure>
            
            <p><em>{e.createdBy}</em></p>
            
            <p className="leg-post">{e.legend}</p>

            <ul>
              {e.tags && e.tags.map((tag, i)=> (                
                <li className="tags" key={i}>
                  <p  onClick={()=> navigate(`/search?q=${tag}`)}><span>#</span>{tag}</p>
                </li>                
              ))}
            </ul>

            <button className="btn" onClick={()=> navigate(`/post/${e.id}`)}>Ver mais</button>
            <div className="clear"></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts