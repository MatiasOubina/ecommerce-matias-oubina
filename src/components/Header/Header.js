import "./header.css"
import NavBar from "../NavBar/NavBar"

const Header = () => {
    return(
        <header>
            <div className="logo_header">
                <h1>JCK FOOD</h1>
            </div>
            <div className="navBar_header">
                <NavBar/>
            </div>
        </header>
    )
}

export default Header