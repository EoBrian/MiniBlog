import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className='box'>
      <h2>Mini <span>BLOG</span></h2>
      
      <br />
      
      <p>É um projeto feito com o <strong>React.js</strong> no front-end e <strong>Firebase</strong> no back-end</p>
      
        <br />
      
      <p>Fiz esse site com o intuito de aprender sobre essas tecnologias</p>
      
      <br />

      <Link className="btn" to="/create/post">
        Crie um post!
      </Link>
    </div>
  )
}

export default About