import { useContext, useState } from "react"
import { contexto } from "../Cart/CartContext"
import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {

  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)
  const {agregarAlCarrito} = useContext( contexto )

  const addToCart = (cantidad)=>{
    setCantidadSeleccionada(cantidad)
    agregarAlCarrito(producto, cantidad)
  }

  
  
  return (
    <>  
      <div id= {producto.id}>
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <img src={producto.foto} alt={producto.name} />
        <p>Precio: ${producto.price}</p>
        <ItemCount stock = {10} min = {1} onAdd ={addToCart}/>
      </div>
    </>
  )
}

export default ItemDetail