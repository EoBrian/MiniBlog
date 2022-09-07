//css
import "../Registration/Registration.css"

//react-hoock-form
import { useForm } from "react-hook-form"

//hoocks
import { useDataBase } from "../../hooks/useDataBase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const NewPost = () => {
  
  const navigate = useNavigate()
  const {isLoading, setPostDB, errorDB} = useDataBase("new-post")
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState(null)
  

  const onSubmit = (data)=> {
    setError(null)

    //is URL ?
    try {
      new URL(data.img)
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
          <label>
            url da imagem
            <input type="text" required {...register("img")} placeholder="ex: https://www.imagem-exaple.com" />
          </label>
        </div>
        <div className="fields">
          <label>
            Legenda
            <input type="text" required maxLength={150} {...register("legend")} />
          </label>
        </div>
        <div className="fields">
          <label>
            Tags separadas por vírgula
            <input type="text" maxLength={50} placeholder="ex: react, firebase" {...register("tags")} />
          </label>          
        </div>
        <div className="fields">
          <input type="submit" value="publicar" />
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