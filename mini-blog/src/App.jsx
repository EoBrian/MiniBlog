//css
import './App.css'

//react
import { useState } from 'react'

//react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

//components
import MenuApplication from "./components/MenuApplication"

//pages
import Home from './pages/Home'
import CreatePosts from './pages/CreatePosts'
import DashBoard from './pages/DashBoard'
import Login from './pages/Login'
import Registration from './pages/Registration/Registration'
import NotFound from './pages/NotFound'


function App() {


  return (
    <div className="root-app">
      
      <Router>
        <header className="menu-application">
          <MenuApplication/>
        </header>

        <section className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/post" element={<CreatePosts/>}/>
            <Route path="/dashboard" element={<DashBoard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </section>

        <footer className="footer-application">

        </footer>
      </Router>

    </div>
  )
}

export default App
