import { BrowserRouter } from "react-router-dom";
import { GlobalCss } from "./GlobalStyles";
import Footer from "./components/Footer";
import RoutesWeb from "./Routes/routesweb";

function App() {
  return (
    <BrowserRouter>
        <GlobalCss />
        <RoutesWeb />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
