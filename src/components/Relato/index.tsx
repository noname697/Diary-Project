import "./Relato.css";
import Favorito from "../Favorito";

interface RelatoProps {
  id: string | number | undefined;
  dia: string;
  mes: string;
  previa: string;
  hora: string;
  ehFavorito: boolean | undefined;
  alterarFavorito: () => void;
}

const Relato = ({
  id,
  dia,
  mes,
  previa,
  hora,
  ehFavorito,
  alterarFavorito,
}: RelatoProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alterarFavorito();
  };

  return (
    <div key={id as string | number | undefined} className="relato">
      <div className="data">
        <div className="diaemes">
          <h1>{dia}</h1>
          <p>{mes}</p>
        </div>
        <div className="hora-previa">
          <span>{hora}</span>
          <p className="previa">{previa}</p>
        </div>
      </div>
      <Favorito ehFavorito={ehFavorito} mudaFavorito={handleClick} />
    </div>
  );
};

export default Relato;
