import { createContext, useState } from "react";

export const contexto = createContext()
const {Provider} = contexto


const MiCustomProvider = ({children}) =>{
    
    const [cart, setCart] = useState([])

    const agregarAlCarrito = (producto, quantity) =>{
        if(estaEnCarrito(producto.id)){
            const newCart = [...cart];
            for (const element of newCart){
                if(element.producto.id == producto.id){
                    producto.quantity = producto.quantity + quantity;
                }
            }
            setCart(newCart)
        } else{
            setCart([
                ...cart,{
                    producto: producto,
                    quantity: quantity,
                }
            ])
        }
    }
    const eliminarDelCarrito = (id) =>{
        const newCart = [...cart].map(element => element.id !== id);
        setCart(newCart);
    }
    const vaciarCarrito = () =>{
        setCart([])
    }
    const estaEnCarrito = (producto) => {
        return cart.find(el => el.id === producto)
    }

    return(
        <Provider value={{cart, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito} }>
            {children}
        </Provider>
    )
}

export default MiCustomProvider