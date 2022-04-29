import "./header.css"
import NavBar from "../NavBar/NavBar"
import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header>
            <div className="logo_header">
               <Link to="/"><h1>JCK FOOD</h1></Link>
            </div>
            <div className="navBar_header">
                <NavBar/>
            </div>
        </header>
    )
}

export default Header