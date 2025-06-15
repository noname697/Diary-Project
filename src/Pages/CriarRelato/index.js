import { useState } from "react";
import Formulario from "../../components/Formulario";
import "./CriarRelato.css";
import { postRelatos } from "../../services/relatos";
import { Link, useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";

const CriarRelato = () => {
  const [data, setData] = useState("");
  const [texto, setTexto] = useState("");
  const navigate = useNavigate();

  const submeterForm = (e) => {
    e.preventDefault();
    const dataFormatada = new Date(data);
    dataFormatada.setDate(dataFormatada.getDate() + 1);
    const dados = {
      data: dataFormatada,
      texto: texto,
    };
    postRelatos(dados);
    navigate("/");
  };

  return (
    <div>
      <div className="cabecalho">
        <Link to="/" className="link">
          <IoMdArrowBack size={25} />
        </Link>
        <h2>Criar Relato</h2>
      </div>
      <section className="sessao">
        <Formulario
          tipo="Date"
          placeholder="Escreva seu relato completo aqui..."
          defineData={(e) => setData(e.target.value)}
          defineTexto={(e) => setTexto(e.target.value)}
          submeterForm={submeterForm}
        />
      </section>
    </div>
  );
};

export default CriarRelato;
