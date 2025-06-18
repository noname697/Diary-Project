import { NavLink } from "react-router";
import "./MenuLink.css";

const MenuLink = ({ children, to }) => {
  return (
    <NavLink
      className={({ isActive }) => `${isActive ? "link-ativo" : "item-lista-normal"} item-lista`}
      to={to}
      end
    >
      {children}
    </NavLink>
  );
};

export default MenuLink;
