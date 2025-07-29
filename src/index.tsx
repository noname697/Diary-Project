import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import CriarRelato from "./Pages/CriarRelato";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VerRelato from "./Pages/VerRelato";
import EditarRelato from "./Pages/EditarRelato";
import Favoritos from "./Pages/Favoritos";
import RelatosProvider from "./contexts/relatos";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RelatosProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/criarrelato" element={<CriarRelato />} />
          <Route path="/verRelato/:id" element={<VerRelato />} />
          <Route path="/editarRelato/:id" element={<EditarRelato />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RelatosProvider>
  </React.StrictMode>
);
