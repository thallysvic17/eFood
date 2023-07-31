import { ContentHero, Logo, Title } from "./styles"
import logo from '../../assets/images/logo.png'


const Hero = () => (
    <ContentHero>
        <Logo>
            <img src={logo} alt="efood" />
        </Logo>
        <Title>
            <h2>Viva experiências gastronômicas <br/> no conforto da sua casa</h2>
        </Title>
    </ContentHero>
)

export default Hero