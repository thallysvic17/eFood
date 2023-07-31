import { ListContainer } from "../../GlobalStyles";
import Restaurant from "../Restaurant";
import Tag from "../tag";

const RestaurantList = () => (
  <ListContainer>
    <Restaurant
      //imgHeader="sushi"
      tags={
      <>
        <Tag size="large">Destaque da semana</Tag>
        <Tag size="small">Sushi</Tag>
      </>
    }
      tittle="Hioko Sushi"
      note="4.9"
      description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
                Entrega rápida, embalagens cuidadosas e qualidade garantida.
                Experimente o Japão sem sair do lar com nosso delivery!"
    />
    <Restaurant
      //imgHeader="sushi"
      tags={<Tag size="large">Destaque da semana</Tag>}
      tittle="Hioko Sushi"
      note="4.9"
      description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
                Entrega rápida, embalagens cuidadosas e qualidade garantida.
                Experimente o Japão sem sair do lar com nosso delivery!"
    />
    <Restaurant
      //imgHeader="sushi"
      tags={<Tag size="large">Destaque da semana</Tag>}
      tittle="Hioko Sushi"
      note="4.9"
      description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
                Entrega rápida, embalagens cuidadosas e qualidade garantida.
                Experimente o Japão sem sair do lar com nosso delivery!"
    />
    <Restaurant
      //imgHeader="sushi"
      tags={<Tag size="large">Destaque da semana</Tag>}
      tittle="Hioko Sushi"
      note="4.9"
      description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
                Entrega rápida, embalagens cuidadosas e qualidade garantida.
                Experimente o Japão sem sair do lar com nosso delivery!"
    />
    <Restaurant
      //imgHeader="sushi"
      tags={<Tag size="large">Destaque da semana</Tag>}
      tittle="Hioko Sushi"
      note="4.9"
      description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
                Entrega rápida, embalagens cuidadosas e qualidade garantida.
                Experimente o Japão sem sair do lar com nosso delivery!"
    />
    <Restaurant
      //imgHeader="sushi"
      tags={<Tag size="large">Destaque da semana</Tag>}
      tittle="Hioko Sushi"
      note="4.9"
      description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
                Entrega rápida, embalagens cuidadosas e qualidade garantida.
                Experimente o Japão sem sair do lar com nosso delivery!"
    />
  </ListContainer>
);

export default RestaurantList;
