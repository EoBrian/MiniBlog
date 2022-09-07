import { useNavigate } from "react-router-dom"


const Posts = ({posts}) => {

  const navigate = useNavigate()

  return (
    <div>
      <ul className="box-post">
        {posts.map((e)=> (
          <li key={e.id}  className='posts' onClick={()=> navigate(`/post/${e.id}`)}>

            <figure>
              <img className="img=post"
                width="100%"
                src={e.img}
                alt={e.title} />
            </figure>
            
            <p><em>{e.createdBy}</em></p>
            
            <p className="leg-post">{e.legend}</p>
            
            {e.tags && e.tags.map((tag, i)=> (
              <p className="tags" key={i}>
                <span>#</span> {tag}
              </p>
            ))}
            
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts