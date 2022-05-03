import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import productos from "../../productos.json"

function ItemDetailContainer() {

  const [stock, setStock] = useState();
  const [loading, setLoading] = useState(true)
  
  const {id} = useParams()

  useEffect(()=>{
      const pedido = new Promise((resolve) =>{
          setTimeout(()=>{
              resolve(stock)
          }, 1000)
      })

      pedido
      .then((respuesta) =>{
        if(id){
          const filtro = productos.filter((item) => item.id === parseInt(id))
          setStock(filtro)
        } else {
          setStock(respuesta)
        }
        
      })
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))
  }, [id])
  
  

  if(loading){
    return(
      <h2>Aguarde por favor...</h2>
    ) 
  } else{
    return(
      <ItemDetail key={stock[0].id} producto={stock[0]}/>
      
    )
  }
}

export default ItemDetailContainer
