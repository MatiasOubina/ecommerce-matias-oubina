import "./navBar.css"
import CartWidget from "../Cart/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <nav className="navBar">
            <Link to="/">Inicio</Link>
            <Link to="/comidas/japon">Japón</Link>
            <Link to="/comidas/china">China</Link>
            <Link to="/comidas/corea">Corea</Link>
            <Link to="/carrito"><CartWidget/></Link>
        </nav>
    )
}

export default NavBar