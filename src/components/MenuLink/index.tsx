import { NavLink } from "react-router";
import "./MenuLink.css";
import { ReactElement } from "react";

interface MenuLinkProps{
  children: ReactElement | string
  to: string;
}

const MenuLink = ({ children, to }: MenuLinkProps) => {
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
