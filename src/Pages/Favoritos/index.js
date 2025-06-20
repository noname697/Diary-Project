import { useState } from "react";
import Relatos from "../../components/Relatos"
import "./Favoritos.css"

const Favoritos = () => {
      const [listaRelatos, setListaRelatos] = useState([]);
    return (
        <div className="favoritosContainer">
             <Relatos
        listaRelatos={listaRelatos}
        setListaRelatos={setListaRelatos}
      />
        </div>
    )
}

export default Favoritos