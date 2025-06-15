import { Link } from "react-router";
import "./Titulo.css";

const Titulo = ({ texto, Icone, size, to, posicaoIcone }) => {
  return (
    <div className="cabecalho">
      <h2>{texto}</h2>
      <Link to={to}>
        <Icone style={posicaoIcone === "right" ? {right: 0}: {left: 0}} size={size} className="icone" color="#2685BF" />
      </Link>
    </div>
  );
};

export default Titulo;
