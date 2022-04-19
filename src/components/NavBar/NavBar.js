import CartWidget from "../../CartWidget/CartWidget"


const NavBar = () =>{
    return(
        <nav className="navBar">
            <a href="#">Inicio</a>
            <a href="#">Nosotros</a>
            <a href="#">Mis Reservas</a>
            <a href="#"><CartWidget/></a>
        </nav>
    )
}

export default NavBar