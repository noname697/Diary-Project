import { useNavigate } from "react-router";
import "./VerRelatoArea.css";
import { MdDelete, MdEdit } from "react-icons/md";

interface VerRelatoAreaProps {
  color: string;
  size: string;
  data: string | Date;
  texto: string;
  id: Number | string | undefined;
  PopUp: () => void;
}

const VerRelatoArea = ({
  color,
  size,
  data,
  texto,
  id,
  PopUp,
}: VerRelatoAreaProps) => {
  const dataObj = new Date(data);
  const dataFormatada = dataObj.toLocaleDateString("pt-BR", {
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
