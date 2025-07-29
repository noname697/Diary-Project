import Relatos from "../../components/Relatos";
import styled from "styled-components";
import "./Home.css";
import { useEffect, useRef, useState } from "react";
import { getRelatos } from "../../services/relatos";
import { MdAddCircle } from "react-icons/md";

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

const Home = () => {
  const [listaRelatos, setListaRelatos] = useState([]);
  const componenteReferencia = useRef(null);
  const [altura, setAltura] = useState(0);

  useEffect(() => {
    const fetchRelatos = async () => {
      const relatos = await getRelatos();
      setListaRelatos(relatos);
    };

    fetchRelatos();
  }, []);

  useEffect(() => {
    if (componenteReferencia.current) {
      setAltura(componenteReferencia.current.offsetHeight);
    }
  }, [listaRelatos]);

  return (
    <div className="App">
      <Background style={{ height: `${altura}px`, minHeight: "80.5vh" }} />
      <Opacity style={{ height: `${altura}px`, minHeight: "80.5vh" }} />
      <Relatos
        texto="Relatos"
        Icone={MdAddCircle}
        size={30}
        to="/criarRelato"
        posicaoIcone="right"
        ref={componenteReferencia}
        listaRelatos={listaRelatos}
        setListaRelatos={setListaRelatos}
      />
    </div>
  );
};

export default Home;
