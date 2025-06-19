import "./Relato.css";
import Favorito from "../Favorito";
import { postFavorito } from "../../services/relatos";

const Relato = ({ id, dia, mes, previa, hora }) => {
  const mudaFavorito = async (e) => {
    e.preventDefault();
    await postFavorito(id);
  };

  return (
    <div key={id} className="relato">
      <div className="data">
        <div className="diaemes">
          <h1>{dia}</h1>
          <p>{mes}</p>
        </div>
        <div className="hora-previa">
          <span>{hora}</span>
          <p className="previa">{previa}</p>
        </div>
      </div>
      <Favorito mudaFavorito={(e) => mudaFavorito(e)} />
    </div>
  );
};

export default Relato;
