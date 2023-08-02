import AboutModel from "../../Models/AboutModel";
import AboutRestaurant from "../AboutRestaurant";
import { ContainerGrid } from "./styles";

type PropsAbout = {
  Cards: AboutModel[];
};

const AboutList = ({ Cards }: PropsAbout) => (
  <ContainerGrid>
    {Cards.map((card) => {
      return (
        <AboutRestaurant
          key={card.id}
          imgBackground={card.imgBackground}
          title={card.title}
          description={card.description}
        />
      );
    })}
  </ContainerGrid>
);

export default AboutList;
