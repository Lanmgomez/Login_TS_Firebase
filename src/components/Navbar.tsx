import "./Navbar.sass";
import { Link, NavLink } from "react-router-dom";
// context and authentication
import { useAuthentication } from "../hooks/useAuthentication"
import { useAuthValue } from "../context/AuthContext"

type Props = {}

const Navbar = (props: Props) => {

  const { user } = useAuthValue();

  const { logout } = useAuthentication();

  return (
    <nav id="navbar">
        <Link to="/" className="Mini-Blog-Link">Mini Login</Link>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">Sobre Nós</Link></li>
            {!user && (
              <>
                <li><Link to="/register">Nova Conta</Link></li>
                <li><Link to="/login">Login</Link></li>
              </>
            )}
            {user && (
              <>
                <li><Link to="/main">Conteúdo</Link></li>
                <li><button onClick={logout}>Sair</button></li>
              </>
            )}
        </ul>
    </nav>
  )
}

export default Navbar