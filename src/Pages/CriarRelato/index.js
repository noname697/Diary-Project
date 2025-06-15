import { useState } from "react";
import Formulario from "../../components/Formulario";
import Header from "../../components/Header";
import "./CriarRelato.css";
import { postRelatos } from "../../services/relatos";

const CriarRelato = () => {
  const [data, setData] = useState("");
  const [texto, setTexto] = useState("");

  const submeterForm = (e) => {
    e.preventDefault();
    const dados = {
      data: data,
      texto: texto,
    };
    postRelatos(dados);
  };

  return (
    <div>
      <Header />
      <section className="sessao">
        <h2>Criar Relato</h2>
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
