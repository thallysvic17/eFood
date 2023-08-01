import { ListContainer } from "../../GlobalStyles";
import Restaurant from "../Restaurant";

const data = [
  {
    tags: ["destaque da semana", "sushi"],
    title: "sushi ",
    note: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    imgHeader:
      "https://img.freepik.com/fotos-gratis/paisagem-tropical-ensolarada_23-2150466878.jpg",
  },
  {
    tags: ["sushi"],
    title: "sushi ",
    note: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    imgHeader:
      "https://img.freepik.com/fotos-gratis/paisagem-tropical-ensolarada_23-2150466878.jpg",
  },
  {
    tags: ["destaque da semana", "sushi"],
    title: "sushi ",
    note: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    imgHeader:
      "https://img.freepik.com/fotos-gratis/paisagem-tropical-ensolarada_23-2150466878.jpg",
  },
  {
    tags: ["destaque da semana", "sushi"],
    title: "sushi ",
    note: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    imgHeader:
      "https://img.freepik.com/fotos-gratis/paisagem-tropical-ensolarada_23-2150466878.jpg",
  },
];

const RestaurantList = () => (
  <ListContainer>
    {data.map((item, index) => {
      return (
        <Restaurant
          key={index}
          imgHeader={item.imgHeader}
          tags={item.tags}
          title={item.title}
          note={item.note}
          description={item.description}
        />
      );
    })}
  </ListContainer>
);

export default RestaurantList;
