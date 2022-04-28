import Item from './Item'
import "./itemList.css"

const ItemList = ({productos})=> {
    return(
        <>
        <div className='card_container'>
          {productos.map(producto => <Item producto={producto}/>)}
        </div>
        </>
    )
}

export default ItemList