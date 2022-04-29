import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import productos from "../../productos.json"
import "./itemListContainer.css"


const ItemListContainer = () =>{
    
    const [stock, setStock] = useState([]);
    const [loading, setLoading] = useState(true)
    
    //Si lo uso así, me trae todo perfecto
    const resultado = useParams()
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

    return(
        <>
         {loading ? <h2>Cargando...</h2> : <ItemList productos = {productos}/>}
        </>
    )
}

export default ItemListContainer