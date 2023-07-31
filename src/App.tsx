import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Container, GlobalCss} from "./GlobalStyles";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RestaurantList from "./components/RestaurantList";


const rotes = createBrowserRouter([
  {
    path : '/',
    element: <>
    </>
  }
])

function App() {
  return (
    <Container>
      <GlobalCss />
      <Hero />
      <RestaurantList/>
      <Footer/>
    </Container>
  );
}

export default App;
