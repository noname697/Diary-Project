import { useState } from "react";
import Formulario from "../../components/Formulario";
import Header from "../../components/Header";
import "./CriarRelato.css";

const CriarRelato = () => {
  const [data, setData] = useState("");
  const [texto, setTexto] = useState("");

  const submeterForm = (e) => {
    e.preventDefault();
    console.log(data + texto)
  }

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
