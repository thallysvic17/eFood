
import { ButtonSubmit } from "../Button/styled";
import { Card, Descriptions, HeaderCard } from "./styled";

type Props = {
    imgBackground?: string
    title: string
    description: string
    
}

const AboutRestaurant = ({imgBackground, title, description}:Props) => (
    <Card>
        <HeaderCard background={imgBackground}/>
        <Descriptions>
            <h2>{title}</h2>
            <p>{description}</p>
        </Descriptions>
        <ButtonSubmit size="large">Adicionar ao carrinho</ButtonSubmit>
    </Card>
)

export default AboutRestaurant