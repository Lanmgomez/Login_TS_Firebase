// SASS
import "./Home.sass";
// React Icons
import { FaReact, FaWindows } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiSass, SiFirebase } from "react-icons/si";
import { FcLinux } from "react-icons/fc"

const Home = () => {
  return (
    <div className="main-home-div">
        <h1>Bem-vindo</h1>
          <h3>Esse é um projeto <span>Fullstack</span></h3>
          <p>Front-end feito com:</p>
            <div className="div-front-end-icons">
                <div>
                  <FaReact className="icons-react-react" />
                  <p>React</p>
                </div>
                <div>
                  <SiJavascript className="icons-react-javascript" />
                  <p>JavaScript</p>
                </div>
                <div>
                  <SiTypescript className="icons-react-typescript" />
                  <p>TypeScript</p>
                </div>
                <div>
                  <SiSass className="icons-react-sass" />
                  <p>Sass</p>
                </div>
            </div>
            <p>Back-end feito com:</p>
            <div className="div-front-end-icons">
                <div>
                  <SiFirebase className="icons-react-firebase" />
                  <p>Firebase</p>
                </div>
            </div>
            <p>Testado nos Sistemas Operacionais:</p>
            <div className="div-front-end-icons">
                <div>
                  <FaWindows className="icons-react-windows" />
                  <p>Windows</p>
                </div>
                <div>
                  <FcLinux className="icons-react-linux" />
                  <p>Linux</p>
                </div>
            </div>
    </div>
  )
}

export default Home