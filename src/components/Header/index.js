import { FaBookOpen } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <FaBookOpen size={50}/>
      <h1>Diary</h1>
    </header>
  );
};

export default Header;
