import { Banner, BannerInfos, ContentHero, Logo, Title } from "./styles";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

interface IheroProps {
  page?: "home" | "about";
}

const Hero = ({ page }: IheroProps) => {
  if (page === "home") {
    return (
      <ContentHero>
        <Logo>
          <img src={logo} alt="efood" />
        </Logo>
        <Title>
          <h2>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </h2>
        </Title>
      </ContentHero>
    );
  } else if (page === "about") {
    return (
      <ContentHero>
        <Logo>
          <Link to="/"><a>Restaurante</a></Link>
          <img src={logo} alt="efood" />
          <Link to="/"><p>0 produto(s) no carrinho</p></Link>
        </Logo>
        <Banner>
          <BannerInfos>
            <h6>Italiana</h6>
            <h1>La Dolce Vita trattoria</h1>
          </BannerInfos>
        </Banner>
      </ContentHero>
    );
  }
};

export default Hero;
