import "./item.css"
import { useNavigate } from "react-router-dom"

const Item = ({producto}) =>{

    const navigate = useNavigate()

    const handleClick = () =>{
        navigate(`/comida/${producto.id}`)
    }

    return(
        <div key={producto.id} className="card">
            <h3>{producto.name}</h3>
            <div>
                <img src={producto.foto} className="card_photo" alt={producto.name} />
            </div>
            <button className="btn_detail" onClick={handleClick}>Detalle</button>
        </div>
    )
}

export default Item