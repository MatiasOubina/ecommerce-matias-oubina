import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import productos from "../../productos.json"

function ItemDetailContainer() {

  const [stock, setStock] = useState({});
  const [loading, setLoading] = useState(true)
  
  //Si lo uso así, me sale siempre undefined
  const {resultado} = useParams()
    console.log(resultado)

    

  useEffect(()=>{
      const pedido = new Promise((resolve) =>{
          setTimeout(()=>{
              resolve(stock)
          }, 2000)
      })

      pedido
      .then(respuesta =>{
          setStock(respuesta)
      })
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))
  }, [])
  
  

  if(loading){
    return(
      <h2>Aguarde por favor...</h2>
    ) 
  } else{
    return(
      <ItemDetail producto={productos}/>
    )
  }
}

export default ItemDetailContainer
