import "./Relatos.css";
import { forwardRef, useContext, useEffect, useReducer } from "react";
import { Link } from "react-router";
import { postFavorito } from "../../services/relatos";
import Relato from "../Relato/index";
import Titulo from "../Titulo/index";
import reducer, { UPDATE_SCREEN_WIDTH } from "./reducer";
import { IconType } from "react-icons";
import { RelatosContext } from "../../contexts/relatos";

interface RelatosProps {
  texto: string;
  posicaoIcone: string;
  Icone: IconType;
  to: string;
  size: string | number;
}

const Relatos = forwardRef<HTMLDivElement, RelatosProps>(
  (
    {
      texto,
      posicaoIcone,
      Icone,
      to,
      size,
    }: RelatosProps,
    ref
  ) => {
    const {relatos, setRelatos} = useContext(RelatosContext)!;
    const initialState = {
      larguraDaTela: window.innerWidth,
      limiteDeCaracteres:
        window.innerWidth > 1024 ? 150 : window.innerWidth > 600 ? 100 : 30,
    };
    const [estado, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      const handleResize = () => {
        dispatch({
          tipo: UPDATE_SCREEN_WIDTH,
          larguraDaTela: window.innerWidth,
        });
      };

      handleResize(); // Chamar handleResize quando o componente é montado

      // Adicionar um listener de evento resize para atualizar o estado quando a janela for redimensionada
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize); // Limpar o listener quando o componente for desmontado
    }, []);

    const mudaFavorito = async (id: number | string | undefined) => {
      await postFavorito(id);
      setRelatos((prev) =>
        prev.map((relato) =>
          relato.id === id ? { ...relato, favorito: !relato.favorito } : relato
        )
      );
    };

    return (
      <section ref={ref}>
        <Titulo
          posicaoIcone={posicaoIcone}
          texto={texto}
          Icone={Icone}
          size={size}
          to={to}
        />
        <div className="relatos">
          {relatos.length >= 1 ? (
            relatos
              .sort(
                (a, b) =>
                  new Date(b.data).getTime() - new Date(a.data).getTime()
              )
              .map((relato) => {
                const data = new Date(relato.data);
                const dia = String(data.getDate()).padStart(2, "0");
                const diaSemana = data.toLocaleString("pt-BR", {
                  weekday: "short",
                });
                const dataCriada = new Date(relato.createdAt ?? "");
                const hora = `${dataCriada
                  .getHours()
                  .toString()
                  .padStart(2, "0")} : ${dataCriada
                  .getUTCMinutes()
                  .toString()
                  .padStart(2, "0")}`;
                const textoLimpo = relato.texto.replace(/\s+/g, " ").trim();
                const previa =
                  textoLimpo.length > estado.limiteDeCaracteres
                    ? textoLimpo.slice(0, estado.limiteDeCaracteres) + "..."
                    : textoLimpo;
                return (
                  <Link
                    key={String(relato.id ?? "")}
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
                      alterarFavorito={() => mudaFavorito(relato.id)}
                    />
                  </Link>
                );
              })
          ) : (
            <p>Você ainda não tem relatos!</p>
          )}
        </div>
      </section>
    );
  }
);

export default Relatos;
