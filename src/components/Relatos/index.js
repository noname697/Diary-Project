import { useEffect, useState } from "react";
import { getRelatos } from "../../services/relatos.js";
import "./Relatos.css";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router";
import Relato from "../Relato/index.js";
import Titulo from "../Titulo/index.js";

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
      <Titulo posicaoIcone="right" texto="Relatos" Icone={MdAddCircle} size={30} to="/criarRelato"/>

      <div className="relatos">
        {listaRelatos.length >= 1 ? (
          listaRelatos
            .sort((a, b) => new Date(b.data) - new Date(a.data))
            .map((relato) => {
              const data = new Date(relato.data);
              const dia = String(data.getDate()).padStart(2, "0");
              const mes = data.toLocaleString("pt-BR", { month: "long" });
              const previa = relato.texto.slice(0, 200);
  
              return (
                <Link className="link" to={`/verRelato/${relato.id}`}>
                  <Relato id={relato.id} dia={dia} mes={mes} previa={previa} />
                </Link>
              );
            })
        ) : (<p>Você ainda não tem relatos!</p>)}
      </div>
    </section>
  );
};

export default Relatos;
