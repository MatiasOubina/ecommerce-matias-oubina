import { useState, useEffect } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import {prom} from '../../utils/Mock'
import "./itemListContainer.css"

const ItemListContainer = () =>{
    
    const addToCart = (cantidad)=>{
        return(alert(`Se agregaron ${cantidad} productos al carrito`))
    }

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        prom
        .then(respuesta =>{
            setProductos(respuesta)
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    }, [])

    return(
        <>
         <ItemCount stock = {10} min = {1} onAdd ={addToCart}/>

         {loading ? <h2>Cargando...</h2> : <ItemList productos ={productos}/>}
        </>
    )
}

export default ItemListContainer