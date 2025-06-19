import "./Favorito.css";
import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";

const Favorito = ({mudaFavorito}) => {
  const [visivel, setVisivel] = useState(false);

  return (
    <div className="div-icone">
      {visivel === false ? (
        <FaRegBookmark size={20} onMouseEnter={() => setVisivel(true)} />
      ) : (
        <FaBookmark
          size={20}
          className="icone-fav"
          onMouseLeave={() => setVisivel(false)}
          onClick={mudaFavorito}
        />
      )}
    </div>
  );
};

export default Favorito;
