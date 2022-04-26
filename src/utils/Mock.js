const productos = [
    {id: 1, name: 'Producto 1', description: 'Detalle de producto 1', foto: 'https://www.mercadoflotante.com/blog/wp-content/uploads/2016/07/karsudon-e1478792889399-768x426-1.jpg', price: 500},
    {id: 2, name: 'Producto 2', description: 'Detalle de producto 2', foto:'https://assets.unileversolutions.com/recipes-v2/231540.jpg' , price: 700},
    {id: 3, name: 'Producto 3', description: 'Detalle de producto 3', foto: 'https://www.mdzol.com/u/fotografias/m/2021/4/16/f850x638-1044704_1122193_5050.jpg', price: 900},
    {id: 4, name: 'Producto 4', description: 'Detalle de producto 4', foto: 'https://superpola.com//site/assets/files/24680/chowfan.jpg', price: 1100},
]

export const prom = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})

