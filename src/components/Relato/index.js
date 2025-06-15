import "./Relato.css";

const Relato = ({ id, dia, mes, previa }) => {
  return (
    <div key={id} className="relato">
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
};

export default Relato;
