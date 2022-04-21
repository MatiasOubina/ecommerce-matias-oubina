import {useState} from 'react';
import "./itemListContainer.css"

function ItemCount({stock, min, onAdd}) {
    const [cantidad, setCantidad] = useState(min)

    const incremento = ()=>{
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const decremento = ()=>{
        if(cantidad > min ){
            setCantidad(cantidad - 1)
        }
    }

    const agregarCarrito = ()=>{
        onAdd(cantidad)
    }

  return (
    <>
        <div className='simulador'>
            <span>{cantidad}</span>
            <button onClick={decremento}>-</button>
            <button onClick={agregarCarrito}>Agregar al Carrito</button>
            <button onClick={incremento}>+</button>
        </div>
    </>
  )
}

export default ItemCount