import Titulo from "../../components/Titulo";
import VerRelatoArea from "../../components/VerRelatoArea";
import "./VerRelato.css";
import { IoMdArrowBack } from "react-icons/io";

const VerRelato = () => {
  return (
    <div>
      <Titulo size={30} texto="Ver Relato" Icone={IoMdArrowBack} to="/" />
      <VerRelatoArea color="#2685BF" size="32"/>
    </div>
  );
};

export default VerRelato;
