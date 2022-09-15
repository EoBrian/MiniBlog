//css
import "../Registration/Registration.css"

//react-hoock-form
import { useForm } from "react-hook-form"

//hoocks
import { useDataBase } from "../../hooks/useDataBase"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"


const NewPost = () => {
  
  const navigate = useNavigate()
  const {isLoading, setPostDB, errorDB, deleteDocument} = useDataBase("new-post")
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState(null)
  const [img, setImg] = useState(null)
  const {id} = useParams()
  const {document:data} = useFetchDocuments("new-post", null, null, id)
 
  console.log(data)
  const onSubmit = (data)=> {
    if (id) {
      deleteDocument(id)
    }

    setError(null)

    //is URL ?
    try {
      const url = new URL(data.img)
    } catch (error) {
      setError("URL INVÁLIDA!")
      return
    }

    //tags array
    const tagsArray = data.tags.split(",").map((tag) => tag.trim().toLowerCase())
    data.tags = [...tagsArray]
    
    //send data to FirebaseDB
    setPostDB(data)
    //return to home page
    navigate("/")
  }

  if (isLoading) {
    return <div className="loading">
      <div className="circle"></div>
    </div>
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Compartilhe momentos!</h2>
        <div className="fields" >
          <figure className="fields">
            <img src={img || data && data.img} width="200" alt="" />
          </figure>
          <label>
            url da imagem
            <input type="text" value={data && data.img} required {...register("img")} placeholder="ex: https://www.imagem-exaple.com"  onChange={e => setImg(e.target.value)}/>
          </label>
          
        </div>
        <div className="fields">
          <label>
            Legenda
            <input value={data && data.legend} type="text" required maxLength={150} {...register("legend")} />
          </label>
        </div>
        <div className="fields">
          <label>
            Tags separadas por vírgula
            <input value={data && data.tags.map(e => e)} type="text" maxLength={50} placeholder="ex: react, firebase" {...register("tags")} />
          </label>          
        </div>
        <div className="fields">
          <input type="submit" value={!id ? "publicar" : "editar"} />
        </div>

        {
          errorDB || error && (
            <div className="error-message">{errorDB}</div>
          )
        }
      </form>
    
  )
}

export default NewPost