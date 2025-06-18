import { FaBookOpen } from "react-icons/fa6";
import "./Header.css";
import { Link } from "react-router";
import MenuLink from "../MenuLink";

const Header = () => {
  const lista = [
    { texto: "Relatos", path: "/" },
    { texto: "Eventos", path: "/verRelato" },
    { texto: "Favoritos", path: "/criarRelato" },
  ];

  return (
    <header>
      <div className="divLista">
        <nav className="lista">
          {lista.map((link) => (
            <MenuLink key={link.texto} to={link.path}>
              {link.texto}
            </MenuLink>
          ))}
        </nav>
      </div>
      <div className="linkHeaderContainer">
        <Link to="/" className="linkHeader">
          <FaBookOpen size={50} />
          <h1>Diary</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
