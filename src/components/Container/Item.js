const Item = ({producto}) =>{
    return(
        <div key={producto.id}>
            <h3>{producto.name}</h3>
            <p>{producto.description}</p>
            <div>
                <img src={producto.foto} alt="Menu del día" />
            </div>
            <button>$ {producto.price}</button>    
        </div>
    )
}

export default Item