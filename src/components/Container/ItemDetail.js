import { useState } from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {

  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)

  const addToCart = (cantidad, total)=>{
    console.log(`Se agregaron ${cantidad} productos al carrito. Total $ ${total}`)
    setCantidadSeleccionada(cantidad)
  }
  
  return (
    <>  
      <div  id= {producto.id}>
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <img src={producto.foto} alt={producto.name} />
        <p>Precio: ${producto.price}</p>
        <ItemCount stock = {10} min = {1} onAdd ={addToCart} precio={producto.price} />
      </div>
    </>
  )
}

export default ItemDetail