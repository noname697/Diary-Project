import { useEffect, useState } from "react";
import { getRelatos } from "../../services/relatos.js";
import "./Relatos.css";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router";

const Relatos = () => {
  const [listaRelatos, setListaRelatos] = useState([]);

  useEffect(() => {
    fetchRelatos();
  }, []);

  const fetchRelatos = async () => {
    setListaRelatos(await getRelatos());
  };

  return (
    <section>
      <div className="cabecalho">
        <h2>Relatos</h2>
        <Link to="/criarRelato">
          <MdAddCircle size={30} className="icone" color="#2685BF" />
        </Link>
      </div>
      <div className="relatos">
        {listaRelatos.map((relato) => {
          const data = new Date(relato.data);
          const dia = String(data.getDate()).padStart(2, "0");
          const mes = data.toLocaleString("pt-BR", { month: "long" });
          const previa = relato.texto.slice(0, 200);

          return (
            <div key={relato.id} className="relato">
              <div className="data">
                <div className="diaemes">
                  <h1>{dia}</h1>
                  <p>{mes}</p>
                </div>
                <div className="barra" />
              </div>

              <p className="previa">{previa}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Relatos;
