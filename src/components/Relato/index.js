import Favorito from "../Favorito";
import "./Relato.css";

const Relato = ({ id, dia, mes, previa, hora }) => {
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
      <Favorito />
    </div>
  );
};

export default Relato;
