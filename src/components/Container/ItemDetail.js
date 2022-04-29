

const ItemDetail = ({producto}) => {
  
  

  const muestraProducto = producto.filter((item) => item.id === 3)


  return (
      muestraProducto.map((mostrar)=>{
        return(
          <>
            <h2>{mostrar.name}</h2>
            <p>{mostrar.description}</p>
            <img src={mostrar.foto} alt={mostrar.name} />
          </>
          )
      })
  )
}

export default ItemDetail