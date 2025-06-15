import "./VerRelatoArea.css";
import { MdDelete, MdEdit } from "react-icons/md";

const VerRelatoArea = ({ color, size }) => {
  return (
    <div className="verRelatoContainer">
      <div class="topo">
        <span class="data">15 de Junho de 2025</span>
        <div class="botoes">
          <MdEdit size={size} color={color} />
          <MdDelete size={size} color={color} />
        </div>
      </div>

      <div class="verRelato">
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
