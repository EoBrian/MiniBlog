import "./MenuApplication.css"

//react
import React, {useState} from 'react'

//context
import { useAuthContext } from "../../context/AuthContext"

//react-router-dom
import { NavLink, Link } from 'react-router-dom'

//icon's
import IconMenu from "./menu.svg"
import CloseMenu from "./close.svg"

const MenuApplication = () => {

  const [menu, setMenu] = useState(true)

  const { user } = useAuthContext()

  

  return (
    <nav>

      {/* colapse menu */}
      <div 
        className="menu-button"
        onClick={()=> menu? setMenu(false) : setMenu(true)}>

        <img width={30} src={menu ? IconMenu : CloseMenu} alt="icone menu" />
      </div>

      <div className="logo">
        {
          user ? (
            <Link to="/">Mini <strong>BLOG</strong> </Link>
          ) :
          (
            <Link to="/login">Mini <strong>BLOG</strong> </Link>
          )
        }
      </div>
      

      <div className="nav-bar">
        <ul className={menu ? "toggle-menu": undefined}>
          {
            user ? (
              <>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/post">New Post</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
              </>
            ) :
            (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/registration">Register</NavLink>
                </li>
              </>
            )
          }      
          
        </ul>
      </div>

      <div className="clear"></div>
    </nav>
  )
}

export default MenuApplication