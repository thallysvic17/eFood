import { BrowserRouter } from "react-router-dom";
import { Container, GlobalCss } from "./GlobalStyles";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RoutesWeb from "./Routes/routesweb";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <GlobalCss />
        <Hero />
          <RoutesWeb />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
