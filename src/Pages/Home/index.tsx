import { Container } from "../../GlobalStyles";
import Hero from "../../components/Hero";
import RestaurantList from "../../components/RestaurantList";

const data = [
  {
    id: 1,
    tags: ["destaque da semana", "sushi"],
    title: "sushi ",
    note: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    imgHeader: "src/assets/images/sushi.png",
  },
  {
    id: 2,
    tags: ["Promocao","italiana"],
    title: "La Dolce Vita Trattoria ",
    note: 4.2,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    imgHeader: "src/assets/images/massas.png",
  },
  {
    id: 3,
    tags: ["sushi"],
    title: "sushi ",
    note: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    imgHeader: "src/assets/images/sushi.png",
  },
  {
    id: 4,
    title: "La Dolce Vita Trattoria ",
    tags: ["italiana"],
    note: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    imgHeader: "src/assets/images/massas.png",
  },
  {
    id: 5,
    tags: ["sushi"],
    title: "sushi ",
    note: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    imgHeader: "src/assets/images/sushi.png",
  },
  {
    id: 6,
    title: "La Dolce Vita Trattoria ",
    tags: ["italiana"],
    note: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    imgHeader: "src/assets/images/massas.png",
  },
];

const Home = () => (
  <Container>
    <Hero page="home" />
    <RestaurantList restaurants={data} />
  </Container>
);
export default Home;
