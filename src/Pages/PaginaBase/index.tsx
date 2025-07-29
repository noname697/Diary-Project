import { Outlet } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RelatosProvider from "../../contexts/relatos";
import Container from "../Container";

const PaginaBase = () => {
  return (
    <main>
      <Header />
      <RelatosProvider>
        <Container>
          <Outlet />
        </Container>
      </RelatosProvider>
      <Footer />
    </main>
  );
};

export default PaginaBase;
