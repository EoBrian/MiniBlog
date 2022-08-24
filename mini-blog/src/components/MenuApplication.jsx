import "./MenuApplication.css"
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const MenuApplication = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Mini <strong>BLOG</strong> </Link>
      </div>
      <div className="nav-bar">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/post">New Post</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/registration">Register</NavLink></li>
        </ul>
      </div>
      <div className="clear"></div>
    </nav>
  )
}

export default MenuApplication