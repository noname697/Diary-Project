import { useState } from "react";
import Formulario from "../../components/Formulario";
import "./CriarRelato.css";
import { postRelatos } from "../../services/relatos.ts";
import { useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";
import Titulo from "../../components/Titulo";

const CriarRelato = () => {
  const [data, setData] = useState("");
  const [texto, setTexto] = useState("");
  const navigate = useNavigate();

  const submeterForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
    <div className="container">
      <Titulo
        posicaoIcone="left"
        texto="Criar Relato"
        Icone={IoMdArrowBack}
        size={25}
        to="/"
      />
      <section className="sessao">
        <Formulario
          tipo="Date"
          placeholder="Escreva seu relato completo aqui..."
          defineData={(e: React.ChangeEvent<HTMLInputElement>) =>
            setData(e.target.value)
          }
          defineTexto={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setTexto(e.target.value)
          }
          valueTexto={texto}
          submeterForm={submeterForm}
          valueData=""
        />
      </section>
    </div>
  );
};

export default CriarRelato;
