import { styled } from "styled-components";

import background from "../../assets/images/Vector.png";
import bannerBackground from "../../assets/images/AboutBackground.png";
import { colors } from "../../GlobalStyles";

export const ContentHero = styled.header`
  width: 100vw;
  height: 385px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${background});
`;

export const Logo = styled.div`
  justify-content: space-around;
  align-items: center;
  padding-top: 30px;
  display: flex;
  margin: 0 auto;
  width: 100%;

  a {
    text-decoration: none;
    color: ${colors.tags};
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
    letter-spacing: 0em;
  }
`;

export const Title = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 35px;

  h2 {
    font-size: 36px;
    font-weight: 900;
    line-height: 42px;
    letter-spacing: 0em;
  }
`;

export const Banner = styled.div`
  background-image: url(${bannerBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  display: flex;
`;
export const BannerInfos = styled.div`
  color: ${colors.background};
  flex-direction: column;
  padding-left: 160px;
  display: flex;
  justify-content: space-between;

  h6 {
    padding-top: 25px;
    font-size: 32px;
    font-weight: 100;
    line-height: 38px;
    letter-spacing: 0em;
    color: ${colors.white};
    opacity: 60%;
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
    line-height: 38px;
    letter-spacing: 0em;
    padding-bottom: 25px;
  }
`;
