import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

const App = () => {
    return(
        <>
        <Header/>
        <ItemListContainer tituloContainer={"La lista de productos va acá"} />
        </>
    )

}

export default App