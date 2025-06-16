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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criarrelato" element={<CriarRelato />} />
        <Route path="/verRelato/:id" element={<VerRelato />} />
        <Route path="/editarRelato/:id" element={<EditarRelato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
