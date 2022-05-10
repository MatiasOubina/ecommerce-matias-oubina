import {useState} from 'react';
import { Link } from "react-router-dom"
import "./itemListContainer.css"

function ItemCount({stock, min, onAdd}) {
    const [cantidad, setCantidad] = useState(min)
    const [cambiarBtn, SetCambiarBtn] = useState(true)
    
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
        SetCambiarBtn(false)
    }

  return (
    <>
        <div className='simulador'>
            <span>{cantidad}</span>
            <button onClick={decremento}>-</button>
            <button onClick={agregarCarrito}>Agregar al Carrito</button> 
            {cambiarBtn < 1 ? <Link to={'/carrito'}><button id="finally">Finalizar compra</button></Link> 
                        : <></>
            }
            <button onClick={incremento}>+</button>
        </div>
    </>
  )
}

export default ItemCount