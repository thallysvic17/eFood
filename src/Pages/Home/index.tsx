
import Hero from "../../components/Hero";
import RestaurantList from "../../components/RestaurantList";
import { Container } from "../../GlobalStyles";
import {dataMock} from '../../Mock/base'

const Home = () => (
  <>
    <Hero page="home" />
    <Container>
      <RestaurantList restaurants={dataMock} />
    </Container>
  </>
);
export default Home;
