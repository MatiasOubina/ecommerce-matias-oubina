import { useContext } from "react"
import { contexto } from "./CartContext"

const Carrito = () => {

  const  {precio_total}= useContext(contexto)

  return (
    <>
      <h1>Detalle de tu carrito</h1>
      
      <h2>Total de la compra: $ {precio_total}</h2>
    </>

  )
}

export default Carrito