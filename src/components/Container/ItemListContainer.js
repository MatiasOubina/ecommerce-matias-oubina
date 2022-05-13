import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import productos from "../../productos.json"
import { db } from "../../firebase/firebase"
import { collection, getDoc, doc, getDocs, addDoc } from "firebase/firestore"
import "./itemListContainer.css"


const ItemListContainer = () =>{
    
    const [stock, setStock] = useState([]);
    const [loading, setLoading] = useState(true)
    const {pais} = useParams()
    
    useEffect(()=>{

        const productosCollection = collection(db, 'productos')
        const consultaDB = getDocs(productosCollection)

        consultaDB
        .then((resultado) =>{
            const productos = resultado.docs.map(doc =>{
                const productoConId = doc.data()
                productoConId.id = doc.id

                return productoConId
            })
            setStock(productos)

            if(pais){
                const filtroPais = productos.filter((item) => item.pais.toLowerCase() === pais)
                setStock(filtroPais);
            }
        })
        .catch((error => console.log(error)))
        .finally (()=> setLoading(false))
    }, [pais])

    return(
        <>
         {loading ? <h2>Cargando...</h2> : <ItemList productos = {stock}/>}
        </>
    )
}

export default ItemListContainer