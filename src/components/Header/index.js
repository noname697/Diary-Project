import { FaBookOpen } from "react-icons/fa6";
import "./Header.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <Link to="/" className="link">
      <FaBookOpen size={50}/>
      <h1>Diary</h1>
      </Link>
    </header>
  );
};

export default Header;
