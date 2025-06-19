import "./Relato.css";
import Favorito from "../Favorito";

const Relato = ({ id, dia, mes, previa, hora, ehFavorito, mudaFavorito }) => {
  const handleClick = (e) => {
    e.preventDefault();
    mudaFavorito();
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
      <Favorito ehFavorito={ehFavorito} id={id} mudaFavorito={handleClick} />
    </div>
  );
};

export default Relato;
