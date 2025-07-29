import "./PopUp.css";

interface PopUpProps {
  onClose: () => void;
  apagaRelato: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const PopUp = ({ onClose, apagaRelato }: PopUpProps) => {
  const handleClickFora = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as HTMLElement).className === "popup-overlay") {
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
