import "./PopUp.css";

const PopUp = ({ onClose, apagaRelato }) => {
  const handleClickFora = (e) => {
    if (e.target.className === "popup-overlay") {
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleClickFora}>
      <div className="confirmacao">
        <h3>Você tem certeza que deseja deletar?</h3>
        <button onClick={apagaRelato}>Sim, tenho certeza!</button>
      </div>
    </div>
  );
};

export default PopUp;
