import "./Formulario.css";

const Formulario = ({ tipo, placeholder, submeterForm, defineData, defineTexto }) => {
  return (
    <form className="formulario">
      <label htmlFor="entrada">Data</label>
      <input id="entrada" type={tipo} placeholder="Selecione a data aqui" onChange={defineData}/>

      <label htmlFor="texto">Relato</label>
      <textarea id="texto" placeholder={placeholder} onChange={defineTexto}></textarea>

      <button type="submit" onClick={submeterForm}>Enviar</button>
    </form>
  );
};

export default Formulario;
