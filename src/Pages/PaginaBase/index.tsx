import { Outlet } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RelatosProvider from "../../contexts/relatos";

const PaginaBase = () => {
  return (
    <main>
      <Header />
      <RelatosProvider>
        <Outlet />
      </RelatosProvider>
      <Footer />
    </main>
  );
};

export default PaginaBase;
