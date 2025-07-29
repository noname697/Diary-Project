import { useNavigate, useParams } from "react-router";
import Titulo from "../../components/Titulo";
import VerRelatoArea from "../../components/VerRelatoArea";
import { deleteRelato, getRelatoEspecifico } from "../../services/relatos.js";
import "./VerRelato.css";
import { IoMdArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import PopUp from "../../components/PopUp/index.tsx";

const VerRelato = () => {
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const { id } = useParams();
  const [relato, setRelato] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchRelato(id);
  }, [id]);

  const fetchRelato = async (id) => {
    const relatoEspecifico = await getRelatoEspecifico(id);
    setRelato(relatoEspecifico);
  };

  const mostraPopUp = () => {
    setMostrarConfirmacao(true);
  };

  const apagaRelato = async (e) => {
    e.preventDefault();
    await deleteRelato(relato.id)
    navigate("/");
  };

  return (
    <div className="verRelatoContainerA">
      <Titulo size={30} texto="Ver Relato" Icone={IoMdArrowBack} to="/" />
      <VerRelatoArea
        PopUp={mostraPopUp}
        color="#2685BF"
        size="32"
        id={relato.id}
        data={relato.data}
        texto={relato.texto}
      />
      {mostrarConfirmacao && (
        <PopUp
          apagaRelato={apagaRelato}
          onClose={() => setMostrarConfirmacao(false)}
        />
      )}
    </div>
  );
};

export default VerRelato;
