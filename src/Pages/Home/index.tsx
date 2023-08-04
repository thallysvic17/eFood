import { Container } from "../../GlobalStyles";
import Hero from "../../components/Hero";
import RestaurantList from "../../components/RestaurantList";
import {dataMock} from '../../Mock/base'

const Home = () => (
  <Container>
    <Hero page="home" />
    <RestaurantList restaurants={dataMock} />
  </Container>
);
export default Home;
