import {
  ContainerCard,
  DescriptionCard,
  HeaderCard,
  TittleAndNote,
} from "./styled";
import star from "../../assets/images/estrela.png";
import { ButtonSubmit } from "../Button/styled";

export type IRestaurantProps = {
  //imgHeader : string
  tittle: string;
  note: string;
  description: string;
  tags: JSX.Element;
};

const Restaurant = ({ tittle, note, description, tags }: IRestaurantProps) => (
  <>
    <ContainerCard>
      <HeaderCard>
        <span>{tags}</span>
      </HeaderCard>
      <TittleAndNote>
        <h2>{tittle}</h2>
        <div className="flex">
          <p>{note}</p>
          <img src={star} alt="star" />
        </div>
      </TittleAndNote>
      <DescriptionCard>{description}</DescriptionCard>
      <ButtonSubmit size="small">Saiba mais</ButtonSubmit>
    </ContainerCard>
  </>
);

export default Restaurant;
