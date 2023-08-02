import { BrowserRouter } from "react-router-dom";
import { Container, GlobalCss } from "./GlobalStyles";
import Footer from "./components/Footer";
import RoutesWeb from "./Routes/routesweb";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <GlobalCss />
        <RoutesWeb />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
