import "./Favorito.css";

interface FavoritoProps {
  mudaFavorito: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  ehFavorito: boolean | undefined;
}

const Favorito = ({ mudaFavorito, ehFavorito }: FavoritoProps) => {
  const fillColor = ehFavorito ? "#2685bf" : "transparent";

  return (
    <div className="div-icone">
      <button
        className="bookmark"
        aria-label="Favoritar"
        onClick={mudaFavorito}
      >
        <svg
          className="icone-fav bookmark-icon"
          width="30"
          height="30"
          stroke="#2685bf"
          strokeWidth="2"
        >
          <path d="M6 4h12v16l-6-4-6 4V4z" fill={fillColor} />
        </svg>
      </button>
    </div>
  );
};

export default Favorito;
