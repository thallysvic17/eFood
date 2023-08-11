import {
  ContainerCard,
  ContainerTag,
  DescriptionCard,
  HeaderCard,
  Tag,
  TittleAndNote,
} from "./styled";
import star from "../../assets/images/estrela.png";
import { ButtonSubmit } from "../Button/styled";
import { Link } from "react-router-dom";

export type IRestaurantProps = {
  imgHeader: string;
  title: string;
  note?: string | number;
  description: string;
  tags: string[];
  id: number
};

const Restaurant = ({
  title,
  note,
  description,
  tags,
  imgHeader,
  id
}: IRestaurantProps) => (
  <>
    <ContainerCard>
      <HeaderCard imageBackground={imgHeader}>
        <ContainerTag>
          {tags.map((tag, i) => {
            return <Tag key={i}>{tag}</Tag>;
          })}
        </ContainerTag>
      </HeaderCard>
      <TittleAndNote>
        <h2>{title}</h2>
        <div className="flex">
          <p>{note}</p>
          <img src={star} alt="star" />
        </div>
      </TittleAndNote>
      <DescriptionCard page="home">{description}</DescriptionCard>
      <Link to={`/sobre/${id}`}>
        <ButtonSubmit size="small">Saiba mais</ButtonSubmit>
      </Link>
    </ContainerCard>
  </>
);

export default Restaurant;
