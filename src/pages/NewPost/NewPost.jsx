import "../Registration/Registration.css"

const NewPost = () => {
  return (
    
      
      <form>
        <h2>Compartilhe momentos!</h2>
        <div className="fields">
          <label>
            Título da postagem
            <input type="text" maxLength={50} />
          </label>          
        </div>
        <div className="fields">
          <label>
            Link da imagem
            <input type="text" />
          </label>
        </div>
        <div className="fields">
          <label>
            Legenda
            <input type="text" maxLength={150} />
          </label>
        </div>
        <div className="fields">
          <input type="submit" value="publicar" />
        </div>
      </form>
    
  )
}

export default NewPost