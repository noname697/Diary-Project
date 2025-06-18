import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import "./Relato.css";
import { useState } from "react";

const Relato = ({ id, dia, mes, previa, hora }) => {
  const [visivel, setVisivel] = useState(false);
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
      <div className="div-icone">
        {visivel === false ? (
          <FaRegBookmark size={18} onMouseEnter={() => setVisivel(true)} />
        ) : (
          <FaBookmark
            size={18}
            className="icone-fav"
            onMouseLeave={() => setVisivel(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Relato;
