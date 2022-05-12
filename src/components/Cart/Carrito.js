import { useContext } from "react"
import { contexto } from "./CartContext"
import { Link } from "react-router-dom"
import "./carrito.css"

const Carrito = () => {

  const  {cart, eliminarDelCarrito, totalPagar, vaciarCarrito}= useContext(contexto)

  return (
    <div className="carrito_container">
      {cart.length > 0 ?
        <>
        {cart.map((item) => 
        <div key={item.producto.id} className="carritoLleno">
          <img src={item.producto.foto} alt={item.producto.name} />
          <h3>{item.producto.name}</h3>
          <h3>Cantidad: {item.quantity}</h3>
          <h3>Precio (unidad): $ {item.producto.price}</h3>
          <h3>Total: $ {(item.quantity)* (item.producto.price)}</h3>
          <button onClick={ () => eliminarDelCarrito(item.producto.id)}>Eliminar</button>
          
        </div> 
        )}
        <div className="montoPagar"> 
        <h3>Total a pagar: $ {totalPagar()}</h3> 
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        <button>Pagar</button>
        </div>
        </>
      : <div className="carritoVacio">
          <h1>Hey! No vemos nada en tu carrito... </h1>
            <Link to={"/"}>
              <button>Volver a la tienda</button>
            </Link>
        </div>} 
    </div>

  )
}

export default Carrito