import "./Formulario.css";

interface FormularioProps{
  tipo: string;
  placeholder: string;
  submeterForm: () => void
  defineData: () => void;
  defineTexto: () => void
  valueTexto: string;
  valueData: string
}

const Formulario = ({
  tipo,
  placeholder,
  submeterForm,
  defineData,
  defineTexto,
  valueTexto = "",
  valueData,
} : FormularioProps) => {
  return (
    <form className="formulario">
      <label htmlFor="entrada">Data</label>
      <input
        required
        defaultValue={valueData}
        id="entrada"
        type={tipo}
        placeholder="Selecione a data aqui"
        onChange={defineData}
      />

      <label htmlFor="texto">Relato</label>
      <textarea
        required
        value={valueTexto}
        id="texto"
        placeholder={placeholder}
        onChange={defineTexto}
      ></textarea>

      <button type="submit" onClick={submeterForm}>
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
