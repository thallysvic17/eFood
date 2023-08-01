import RestaurantList from "../../components/RestaurantList";

const data = [
  {
    id: 1,
    tags: ["destaque da semana", "sushi"],
    title: "sushi ",
    note: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    imgHeader:
      "https://img.freepik.com/fotos-gratis/paisagem-tropical-ensolarada_23-2150466878.jpg",
  },
  {
    id: 2,
    tags: ["sushi"],
    title: "sushi ",
    note: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    imgHeader:
      "https://img.freepik.com/fotos-gratis/paisagem-tropical-ensolarada_23-2150466878.jpg",
  },
  {
    id: 3,
    tags: ["destaque da semana", "sushi"],
    title: "sushi ",
    note: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    imgHeader:
      "https://img.freepik.com/fotos-gratis/paisagem-tropical-ensolarada_23-2150466878.jpg",
  },
  {
    id: 4,
    tags: ["destaque da semana", "sushi"],
    title: "sushi ",
    note: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    imgHeader:
      "https://img.freepik.com/fotos-gratis/paisagem-tropical-ensolarada_23-2150466878.jpg",
  },
];

const Home = () => (
  <>
    <RestaurantList restaurants={data} />
  </>
);

export default Home;
