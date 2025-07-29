import { useContext, useEffect, useRef, useState } from "react";
import Relatos from "../../components/Relatos/index.tsx";
import "./Favoritos.css";
import { getFavoritos } from "../../services/relatos.ts";
import { IoMdArrowBack } from "react-icons/io";
import styled from "styled-components";
import { RelatosContext } from "../../contexts/relatos.tsx";

const Background = styled.div`
  width: 100%;
  position: absolute;
  z-index: -1;
  background-image: url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-repeat: repeat;
`;

const Opacity = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000;
  opacity: 0.5;
  z-index: -1;
`;

const Favoritos = () => {
  const {relatos, setRelatos} = useContext(RelatosContext)!
  const componenteReferencia = useRef<HTMLDivElement>(null);
  const [altura, setAltura] = useState(0);

useEffect(() => {
  const fetchRelatosFavoritos = async () => {
    const relatosFavoritos = await getFavoritos();
    setRelatos(relatosFavoritos);
  };
  fetchRelatosFavoritos();
}, [setRelatos]);

 useEffect(() => {
  if (componenteReferencia.current) {
    setAltura(componenteReferencia.current.offsetHeight);
  }
}, [relatos]);

  return (
    <div className="favoritosContainer">
      <Background style={{ height: `${altura}px`, minHeight: "70.6vh" }} />
      <Opacity style={{ height: `${altura}px`, minHeight: "70.6vh" }} />
      <Relatos
        ref={componenteReferencia}
        texto="Relatos Favoritos"
        Icone={IoMdArrowBack}
        size={30}
        to="/"
        posicaoIcone="left"
      />
    </div>
  );
};

export default Favoritos;
