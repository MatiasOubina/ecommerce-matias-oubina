import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import ItemListContainer from "./components/Container/ItemListContainer"
import ItemDetailContainer from "./components/Container/ItemDetailContainer"
import Carrito from "./components/Cart/Carrito"


const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/comidas/:pais" element={<ItemListContainer/>}></Route>
                <Route path="/comida/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/carrito" element={<Carrito/>}></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default App