import "./VerRelatoArea.css";
import { MdDelete, MdEdit } from "react-icons/md";

const VerRelatoArea = ({ color, size, data }) => {


  return (
    <div className="verRelatoContainer">
      <div className="topo">
        <h1 className="data">{data}</h1>
        <div className="botoes">
          <MdEdit className="button" size={size} color={color} />
          <MdDelete className="button" size={size} color={color} />
        </div>
      </div>

      <div className="verRelato">
        <p>
          Hoje foi um daqueles dias em que tudo parecia dar errado, mas no fim
          percebi que cada desafio trouxe um aprendizado importante. Caminhei
          pela rua sentindo o vento no rosto, e apesar das dificuldades, senti
          gratidão por estar vivo. Escrever me ajuda a entender melhor as
          emoções e valorizar os detalhes do cotidiano.
        </p>
      </div>
    </div>
  );
};

export default VerRelatoArea;
