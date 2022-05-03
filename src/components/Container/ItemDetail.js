const ItemDetail = ({producto}) => {
  return (
    <>  
      <div  id= {producto.id}>
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <img src={producto.foto} alt={producto.name} />
      </div>
    </>
  )
}

export default ItemDetail