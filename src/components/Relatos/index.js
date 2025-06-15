import { useEffect, useState } from "react";
import { getRelatos } from "../../services/relatos.js";
import "./Relatos.css";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router";
import Relato from "../Relato/index.js";
import Titulo from "../Titulo/index.js";

const Relatos = () => {
  const [listaRelatos, setListaRelatos] = useState([]);
  const [limiteCaracteres, setLimiteCaracteres] = useState(100);

  useEffect(() => {
    fetchRelatos();
    definirLimite();

    window.addEventListener("resize", definirLimite);
    return () => window.removeEventListener("resize", definirLimite);
  }, []);

  const definirLimite = () => {
    const largura = window.innerWidth;

    if (largura > 1024) {
      setLimiteCaracteres(150);
    } else if (largura > 600) {
      setLimiteCaracteres(100);
    } else {
      setLimiteCaracteres(60);
    }
  };

  const fetchRelatos = async () => {
    setListaRelatos(await getRelatos());
  };

  return (
    <section>
      <Titulo
        posicaoIcone="right"
        texto="Relatos"
        Icone={MdAddCircle}
        size={30}
        to="/criarRelato"
      />

      <div className="relatos">
        {listaRelatos.length >= 1 ? (
          listaRelatos
            .sort((a, b) => new Date(b.data) - new Date(a.data))
            .map((relato) => {
              const data = new Date(relato.data);
              const dia = String(data.getDate()).padStart(2, "0");
              const mes = data.toLocaleString("pt-BR", { month: "long" });

              const textoLimpo = relato.texto.replace(/\s+/g, " ").trim();
              const previa =
                textoLimpo.length > limiteCaracteres
                  ? textoLimpo.slice(0, limiteCaracteres) + "..."
                  : textoLimpo;

              return (
                <Link key={relato.id} className="link" to={`/verRelato/${relato.id}`}>
                  <Relato id={relato.id} dia={dia} mes={mes} previa={previa} />
                </Link>
              );
            })
        ) : (
          <p>Você ainda não tem relatos!</p>
        )}
      </div>
    </section>
  );
};

export default Relatos;