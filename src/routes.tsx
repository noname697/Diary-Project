import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import CriarRelato from "./Pages/CriarRelato";
import VerRelato from "./Pages/VerRelato";
import EditarRelato from "./Pages/EditarRelato";
import Favoritos from "./Pages/Favoritos";
import PaginaBase from "./Pages/PaginaBase";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Home />} />
          <Route path="criarRelato" element={<CriarRelato />} />
          <Route path="verRelato/:id" element={<VerRelato />} />
          <Route path="editarRelato/:id" element={<EditarRelato />} />
          <Route path="favoritos" element={<Favoritos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
