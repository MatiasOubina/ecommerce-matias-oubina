import ItemCount from "./ItemCount"
import "./itemListContainer.css"

const ItemListContainer = () =>{
    
    const addToCart = (cantidad)=>{
        return(alert(`Se agregaron ${cantidad} productos al carrito`))
    }
    

    return(
        <>
         <ItemCount stock = {10} min = {1} onAdd ={addToCart}/>
        </>
    )
}

export default ItemListContainer