//hoocks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//assets
import queryIcon from "../../assets/search-outline.svg"

const Query = ({p_holder}) => {
  
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  const handleSubmit = (e)=> {
    e.preventDefault()
    
    if (!query){
      navigate("/")
      return
    }
    
    navigate(`/search?q=${query}`)
  }

  return (
    <form >       
      
      <input type="text" placeholder={p_holder ? p_holder : "pesquise por tags"} value={query} onChange={(e)=> setQuery(e.target.value)} />
      <span>
        <button type='button' className="btn" onClick={handleSubmit}>
          <img src={queryIcon} alt="query icon" width="20" />
        </button>          
        {/* <input type="submit" value="🔎" /> */}
      </span>

    </form>
  )
}

export default Query