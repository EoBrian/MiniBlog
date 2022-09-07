//hoocks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//assets
import queryIcon from "../../assets/search-outline.svg"

const Query = () => {
  
  const navigate = useNavigate()
  const [query, setQuery] = useState("")


  return (
    <form onSubmit={(e)=> e.preventDefault()}>        
      <input type="text" placeholder="pesquise por tags" value={query} onChange={(e)=> setQuery(e.target.value)} />
      <span>
        <button className="btn" onClick={()=> navigate(`/search?q=${query}`)}>
          <img src={queryIcon} alt="query icon" width="20" />
        </button>          
      </span>
    </form>
  )
}

export default Query