import { Link } from "react-router";
import "./Titulo.css";

const Titulo = ({ texto, Icone, size, to }) => {
  return (
    <div className="cabecalho">
      <h2>{texto}</h2>
      <Link to={to}>
        <Icone size={size} className="icone" color="#2685BF" />
      </Link>
    </div>
  );
};

export default Titulo;
