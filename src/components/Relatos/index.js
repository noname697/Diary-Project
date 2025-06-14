import "./Relatos.css";

const Relatos = () => {
  return (
    <section>
      <h2>Relatos</h2>
      <div className="relatos">
        {/* map */}
        <div className="relato">
          <div className="data">
            <div>
              <h1>Dia</h1>
              <p>Mês</p>
            </div>
            <div className="barra" />
          </div>

          <p className="previa">Prévia texto</p>
        </div>
      </div>
    </section>
  );
};

export default Relatos;
