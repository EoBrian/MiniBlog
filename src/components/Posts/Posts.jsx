const Posts = ({posts}) => {

  return (
    <div>
      <ul className="box-post">
        {posts && posts.map((e)=> (
          <li key={e.id}  className='posts'>

            <h2 className="title-post">{e.title}</h2>

            <figure>
              <img className="img=post"
                width="100%"
                src={e.img}
                alt={e.title} />
            </figure>

            <p className="leg-post">{e.legend}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts