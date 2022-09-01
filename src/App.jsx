//css
import './App.css'

//react
import { useEffect, useState } from 'react'

//context
import { AuthProvider } from './context/AuthContext'

//react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

//firebase
import { onAuthStateChanged } from 'firebase/auth'

//custom hoocks
import { useAuthentication } from './hooks/useAuthentication'

//components
import MenuApplication from "./components/MenuApplication/MenuApplication"
import FooterApp from './components/FooterApp/FooterApp'

//pages
import Home from './pages/Home'
import CreatePosts from './pages/CreatePosts'
import DashBoard from './pages/DashBoard'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'
import NotFound from './pages/NotFound'




function App() {

  const [ user, setUser ] = useState(undefined)
  const isLoadingUser = user === undefined

  const { auth } = useAuthentication()

  useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      setUser(user);
    })
  }, [auth])


  if (isLoadingUser) {
    return <div className="loading">
      <div className="circle"></div>
    </div>
  }

  return (
    <div className="root-app">
      
      <AuthProvider value={{user}}>
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

          <footer className="footer-app">
            <FooterApp/>
          </footer>
        </Router>
      </AuthProvider>

    </div>
  )
}

export default App
