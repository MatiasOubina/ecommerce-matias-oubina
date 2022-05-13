import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
// import productos from "../../productos.json"
import { db } from "../../firebase/firebase"
import { collection, getDocs } from "firebase/firestore"

function ItemDetailContainer() {

  const [stock, setStock] = useState();
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  useEffect(()=>{
      const productosCollection = collection(db, 'productos')
      const consultaDB = getDocs(productosCollection)
      
      consultaDB.then((respuesta) =>{
        const productosBD = respuesta.docs.map(doc =>{
          const productoConId = doc.data()
          productoConId.id = doc.id

          return productoConId
      })
        if(id){
          const filtro = productosBD.filter((item) => item.id === id)
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
