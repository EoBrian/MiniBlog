//css
import "../Registration/Registration.css"

//react-hoock-form
import { useForm } from "react-hook-form"

//hoocks
import { useDataBase } from "../../hooks/useDataBase"
import { useState } from "react"


const NewPost = () => {

  const {isLoading, setPostDB, errorDB} = useDataBase("new-post")
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState(null)


  const onSubmit = (data)=> {

    setError(null)

    //is URL ?
    // try {
    //   new URL(data.url)
    // } catch (error) {
    //   setError("URL INVÁLIDA!")
    //   return
    // }

    setPostDB(data)
  }

  if (isLoading) {
    return <div className="loading">
      <div className="circle"></div>
    </div>
  }

  return (
    
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Compartilhe momentos!</h2>
        <div className="fields">
          <label>
            Título da postagem
            <input type="text" maxLength={50} {...register("title")} />
          </label>          
        </div>
        <div className="fields" >
          <label>
            url da imagem
            <input type="text" {...register("img")} />
          </label>
        </div>
        <div className="fields">
          <label>
            Legenda
            <input type="text" maxLength={150} {...register("legend")} />
          </label>
        </div>
        <div className="fields">
          <input type="submit" value="publicar" />
        </div>

        {
          errorDB && (
            <div className="error-message">{errorDB}</div>
          )
        }

        {
          error && (
            <div className="error-message">{error}</div>
          )
        }
      </form>
    
  )
}

export default NewPost