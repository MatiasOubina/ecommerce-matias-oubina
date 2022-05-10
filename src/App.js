import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import MiCustomProvider from "./components/Cart/CartContext"
import Header from "./components/Header/Header"
import ItemListContainer from "./components/Container/ItemListContainer"
import ItemDetailContainer from "./components/Container/ItemDetailContainer"
import Carrito from "./components/Cart/Carrito"


const App = () => {
    return(
        <BrowserRouter>
            <MiCustomProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}></Route>
                    <Route path="/comidas/:pais" element={<ItemListContainer/>}></Route>
                    <Route path="/comida/:id" element={<ItemDetailContainer/>}></Route>
                    <Route path="/carrito" element={<Carrito/>}></Route>
                </Routes>
            </MiCustomProvider>
        </BrowserRouter>
    )
}

export default App