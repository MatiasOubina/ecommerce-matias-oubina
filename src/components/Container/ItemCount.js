import {useState} from 'react';
import { Link } from "react-router-dom"
import "./itemListContainer.css"

function ItemCount({stock, min, onAdd, precio}) {
    const [cantidad, setCantidad] = useState(min)
    const [total, setTotal] = useState(precio)
    const [cambiarBtn, SetCambiarBtn] = useState(true)

    const incremento = ()=>{
        if(cantidad < stock){
            setCantidad(cantidad + 1)
            setTotal(total + precio)
        }
    }

    const decremento = ()=>{
        if(cantidad > min ){
            setCantidad(cantidad - 1)
            setTotal(total - precio)
        }
    }

    const agregarCarrito = ()=>{
        onAdd(cantidad, total)
        SetCambiarBtn(false)
    }

  return (
    <>
        <div className='simulador'>
            <span>{cantidad}</span>
            <button onClick={decremento}>-</button>
            {cambiarBtn ? <button onClick={agregarCarrito}>Agregar al Carrito</button> 
                        : <Link to={'/carrito'}><button id="finally" onClick={agregarCarrito}>Finalizar compra</button></Link> 
                        
            }
            <button onClick={incremento}>+</button>
        </div>
    </>
  )
}

export default ItemCount