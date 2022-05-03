import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import productos from "../../productos.json"
import "./itemListContainer.css"


const ItemListContainer = () =>{
    
    const [stock, setStock] = useState([]);
    const [loading, setLoading] = useState(true)
    const {pais} = useParams()
    
    useEffect(()=>{
        const pedido = new Promise((resolve) =>{
            setTimeout(()=>{
                resolve(stock)
            }, 1000) 
        })

        pedido
        .then(respuesta =>{
            if(pais){
                const paisFiltrado = productos.filter((item) => item.pais.toLowerCase() === pais)
                setStock(paisFiltrado)
            } else {
                setStock(productos)
            }
            
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    }, [pais])

    return(
        <>
         {loading ? <h2>Cargando...</h2> : <ItemList productos = {stock}/>}
        </>
    )
}

export default ItemListContainer