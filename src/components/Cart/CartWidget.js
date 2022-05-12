import "./cartWidget.css"
import { contexto } from "./CartContext"
import { useContext } from "react"

const CartWidget = () =>{

    const {iconCart} = useContext(contexto)

    return(
        <>
            <img className="cart" src='https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-256.png' alt="" />
            {iconCart()}
        </>
    )
}

export default CartWidget