import { createContext, useState } from "react";

export const contexto = createContext()
const {Provider} = contexto


const MiCustomProvider = ({children}) =>{
    
    const [cart, setCart] = useState([])

    const agregarAlCarrito = (producto, quantity) =>{
        if(estaEnCarrito(producto.id)){
            const actualizarCarrito = [...cart];
            // for (const element of actualizarCarrito){
            //     if(element.producto.id == producto.id){
            //         producto.quantity = producto.quantity + quantity;
            //     }
            // }
            actualizarCarrito.forEach((e) =>{
                if(e.producto.id === producto.id){
                    e.quantity += quantity;
                }
            })
            setCart(actualizarCarrito)
        } else{
            setCart([...cart, {producto, quantity}])
        }
    }
    const eliminarDelCarrito = (id) =>{
        const actualizarCarrito = cart.filter(e => e.producto.id !== id);  //[...cart].map
        setCart(actualizarCarrito);
    }
    const vaciarCarrito = () =>{
        setCart([])
    }
    const estaEnCarrito = (id) => {
        return cart.find(e => e.producto.id === id)
    }

    const iconCart = () => {
        return cart.reduce((acum, value) => acum + value.quantity, 0);
    }

    const totalPagar = () =>{
        return cart.reduce((acum, value) => (acum + (value.quantity * value.producto.price)),0)
    }

    return(
        <Provider value={{cart, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, totalPagar, iconCart} }>
            {children}
        </Provider>
    )
}

export default MiCustomProvider