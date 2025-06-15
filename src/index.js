import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import CriarRelato from "./Pages/CriarRelato";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criarrelato" element={<CriarRelato />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
