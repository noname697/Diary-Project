import { useParams } from "react-router";
import Titulo from "../../components/Titulo";
import VerRelatoArea from "../../components/VerRelatoArea";
import { getRelatoEspecifico } from "../../services/relatos.js";
import "./VerRelato.css";
import { IoMdArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";

const VerRelato = () => {
  const { id } = useParams();
  const [relato, setRelato] = useState({});

  useEffect(() => {
    fetchRelato(id);
  }, [id]);

  const fetchRelato = async (id) => {
    const relatoEspecifico = await getRelatoEspecifico(id);
    setRelato(relatoEspecifico);
  };

  return (
    <div className="verRelatoContainerA">
      <Titulo size={30} texto="Ver Relato" Icone={IoMdArrowBack} to="/" />
      <VerRelatoArea
        color="#2685BF"
        size="32"
        id={relato.id}
        data={relato.data}
        texto={relato.texto}
      />
    </div>
  );
};

export default VerRelato;
