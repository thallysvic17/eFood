import RestaurantList from "../../components/RestaurantList";

const dataContent = [
  {
    id: 1,
    tags: [],
    title: "Pizza Marguerita ",
    description:
      "a clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imgHeader:
      "https://img.freepik.com/fotos-gratis/paisagem-tropical-ensolarada_23-2150466878.jpg",
  },
  {
    id: 2,
    tags: [],
    title: "Pizza Marguerita ",
    description:
      "a clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imgHeader:
      "https://img.freepik.com/fotos-gratis/paisagem-tropical-ensolarada_23-2150466878.jpg",
  },
  {
    id: 3,
    tags: ["destaque da semana", "sushi"],
    title: "Pizza Marguerita ",
    description:
      "a clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imgHeader:
      "https://img.freepik.com/fotos-gratis/paisagem-tropical-ensolarada_23-2150466878.jpg",
  },
  {
    id: 4,
    tags: ["destaque da semana", "sushi"],
    title: "Pizza Marguerita ",
    description:
      "a clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imgHeader:
      "https://img.freepik.com/fotos-gratis/paisagem-tropical-ensolarada_23-2150466878.jpg",
  },
  {
    id: 5,
    tags: ["destaque da semana", "sushi"],
    title: "Pizza Marguerita ",
    description:
      "a clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imgHeader:
      "https://img.freepik.com/fotos-gratis/paisagem-tropical-ensolarada_23-2150466878.jpg",
  },
  {
    id: 6,
    tags: ["destaque da semana", "sushi"],
    title: "Pizza Marguerita ",
    description:
      "a clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    imgHeader:
      "https://img.freepik.com/fotos-gratis/paisagem-tropical-ensolarada_23-2150466878.jpg",
  },
];

const About = () => (
  <>
    <RestaurantList restaurants={dataContent} />
  </>
);

export default About;
