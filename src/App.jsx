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
  Route,
  Navigate
} from "react-router-dom"

//firebase
import { onAuthStateChanged } from 'firebase/auth'

//custom hoocks
import { useAuthentication } from './hooks/useAuthentication'

//components
import MenuApplication from "./components/MenuApplication/MenuApplication"
import FooterApp from './components/FooterApp/FooterApp'
import Loading from './components/Loading'

//pages
import Home from './pages/Home/Home'
import NewPost from './pages/NewPost/NewPost'
import DashBoard from './pages/DashBoard/DashBoard'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'
import NotFound from './pages/NotFound'
import About from './pages/About/About'
import Post from './pages/Post/Post'
import Search from './pages/Search/Search'


function App() {

  const [ user, setUser ] = useState(undefined)
  const isLoadingUser = user === undefined

  const { auth } = useAuthentication()

  useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      setUser(user);
    })
  }, [auth])




  return (
    <div className="root-app">
      
      <Loading loading={isLoadingUser}/>

      <AuthProvider value={{user}}>
        <Router>
          <header className="menu-application">
            <MenuApplication/>
          </header>

          <main className="container d-flex">
            <article className="box">
              <Routes>              
                <Route path="/" element={user ? (<Home/>) : (<Navigate to="/login"/>)}/>
                <Route path="/dashboard" element={user ? (<DashBoard/>) : (<Navigate to="/login"/>)}/>
                <Route path="/about" element={<About/>} />
                <Route path="/post/:id" element={<Post/>}/>
                <Route path="/search" element={<Search/>}/>               
              </Routes>
            </article>
            <Routes>
              <Route path="*" element={<NotFound/>}/>             
              <Route path="/login" element={!user ? (<Login/>) : (<Navigate to="/"/>)}/>
              <Route path="/registration" element={!user ? (<Registration/>) : (<Navigate to="/"/>)}/>       
              <Route path="/create/post" element={user ? (<NewPost/>) : (<Navigate to="/login"/>)}/>
              <Route path='/edit/post/:id' element={<NewPost/>}/>        
            </Routes>
            
          </main>

          <footer className="footer-app">
            <FooterApp/>
          </footer>
        </Router>
      </AuthProvider>

    </div>
  )
}

export default App
