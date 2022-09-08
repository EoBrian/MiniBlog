import "./MenuApplication.css"

//react
import React, {useState} from 'react'

//custom hoocks
import { useAuthentication } from "../../hooks/useAuthentication"

//context
import { useAuthContext } from "../../context/AuthContext"

//react-router-dom
import { NavLink, Link } from 'react-router-dom'

//icon's
import IconMenu from "../../assets/menu.svg"
import CloseMenu from "../../assets/close.svg"
import LogOutIcon from "../../assets/log-out-outline.svg"


const MenuApplication = () => {

  const [menu, setMenu] = useState(true)

  const { user } = useAuthContext()

  const { signOutUser } = useAuthentication()
  

  return (
    <>

      {/* colapse menu */}
      <div 
        className="menu-button"
        onClick={()=> menu? setMenu(false) : setMenu(true)}>

        <img width={30} src={menu ? IconMenu : CloseMenu} alt="icone menu" />
      </div>

      <div className="logo">
        <Link to={user ? "/" : "/login"}>Mini <strong>BLOG</strong> </Link>
      </div>
      

      <nav className="nav-bar">
        <ul className={menu ? "toggle-menu": undefined}>
          {
            user ? (
              <>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/create/post">New Post</NavLink>
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

          <li>
            <NavLink to="/about">About</NavLink>  
          </li>  

          {
            user && (
            <li>
                <button className="btn log-out" onClick={signOutUser}>
                  <img width="30" src={LogOutIcon} alt="log-out-icon" />
                </button>
            </li>
            )
          }
          
        </ul>
      </nav>

      <div className="clear"></div>
    </>
  )
}

export default MenuApplication