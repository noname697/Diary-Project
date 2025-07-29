import { IoMdArrowBack } from "react-icons/io";
import Titulo from "../../components/Titulo/index";
import Formulario from "../../components/Formulario/index";
import { getRelatoEspecifico, putRelato } from "../../services/relatos";
import "./EditarRelato.css";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { IRelato } from "../../shared/IRelato";

const EditarRelato = () => {
  const { id } = useParams();

  const [relato, setRelato] = useState<IRelato>({} as IRelato);
  const [data, setData] = useState("");
  const [texto, setTexto] = useState("");

  useEffect(() => {
    fetchRelato(id);
  }, [id]);

  const fetchRelato = async (id: string | undefined) => {
    const relatoEspecifico: IRelato = await getRelatoEspecifico(id);
    setRelato(relatoEspecifico);
    setTexto(relatoEspecifico.texto || "");
    setData(
      relatoEspecifico.data
        ? new Date(relatoEspecifico.data).toISOString().split("T")[0]
        : ""
    );
  };

  const navigate = useNavigate();

  const submeterForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const dados = {
      data: data,
      texto: texto,
    };
    if (relato.id !== undefined) {
      putRelato(relato.id, dados);
      navigate(`/verRelato/${relato.id}`);
    } else {
      // Handle error: id is undefined
      alert("Erro: ID do relato não encontrado.");
    }
  };

  return (
    <div className="editarRelatoContainer">
      <Titulo
        size={30}
        texto="Editar Relato"
        Icone={IoMdArrowBack}
        to={`/verRelato/${id}`}
      />
      <section className="sessao">
        <Formulario
          submeterForm={submeterForm}
          defineData={(e) => setData(e.target.value)}
          defineTexto={(e) => setTexto(e.target.value)}
          valueTexto={texto}
          valueData={data}
          tipo="date"
          placeholder="Comece a editar seu relato aqui..."
        />
      </section>
    </div>
  );
};

export default EditarRelato;
