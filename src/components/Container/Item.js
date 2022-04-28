import "./item.css"

const Item = ({producto}) =>{
    return(
        <div key={producto.id} className="card">
            <h3>{producto.name}</h3>
            <div>
                <img src={producto.foto} className="card_photo" alt="Menu del día" />
            </div>
            <button className="btn_detail">Detalle</button>
            <button>$ {producto.price}</button>    
        </div>
    )
}

export default Item