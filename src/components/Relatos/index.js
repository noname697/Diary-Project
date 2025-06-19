import { useEffect, useState } from "react";
import { getRelatos } from "../../services/relatos.js";
import "./Relatos.css";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router";
import Relato from "../Relato/index.js";
import Titulo from "../Titulo/index.js";
import { postFavorito } from "../../services/relatos";

const Relatos = () => {
  const [listaRelatos, setListaRelatos] = useState([]);
  const [limiteCaracteres, setLimiteCaracteres] = useState(100);

  const mudaFavorito = async (id) => {
    await postFavorito(id); 


    setListaRelatos((prev) =>
      prev.map((relato) =>
        relato.id === id
          ? { ...relato, favorito: !relato.favorito } 
          : relato
      )
    );
  };

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
      setLimiteCaracteres(30);
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
              const diaSemana = data.toLocaleString("pt-BR", {
                weekday: "short",
              });
              const dataCriada = new Date(relato.createdAt);
              const hora = `${dataCriada
                .getHours()
                .toString()
                .padStart(2, "0")} : ${dataCriada
                .getUTCMinutes()
                .toString()
                .padStart(2, "0")}`;

              const textoLimpo = relato.texto.replace(/\s+/g, " ").trim();
              const previa =
                textoLimpo.length > limiteCaracteres
                  ? textoLimpo.slice(0, limiteCaracteres) + "..."
                  : textoLimpo;

              return (
                <Link
                  key={relato.id}
                  className="link"
                  to={`/verRelato/${relato.id}`}
                >
                  <Relato
                    ehFavorito={relato.favorito}
                    id={relato.id}
                    dia={dia}
                    mes={diaSemana}
                    previa={previa}
                    hora={hora}
                    mudaFavorito={() => mudaFavorito(relato.id)}
                  ></Relato>
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
