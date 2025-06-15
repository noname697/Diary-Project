import { useNavigate } from "react-router";
import "./VerRelatoArea.css";
import { MdDelete, MdEdit } from "react-icons/md";


const VerRelatoArea = ({ color, size, data, texto, id, PopUp }) => {

  let dataFormatada = new Date(data);
  dataFormatada = dataFormatada.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const navigate = useNavigate();

  return (
    <div className="verRelatoContainer">
      <div className="topo">
        <h1 className="dataA">{dataFormatada}</h1>
        <div className="botoes">
          <MdEdit
            onClick={() => navigate(`/editarRelato/${id}`)}
            className="button"
            size={size}
            color={color}
          />
          <MdDelete
            onClick={PopUp}
            className="button"
            size={size}
            color={color}
          />
        </div>
      </div>

      <div className="verRelato">
        <p>{texto}</p>
      </div>
    </div>
  );
};

export default VerRelatoArea;
