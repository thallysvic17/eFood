import { styled } from "styled-components";
import ImageCard from "../../assets/images/sushi.png";

import { colors } from "../../GlobalStyles";

interface IHeaderCardProps {
  imageBackground?: string;
}

export const ContainerCard = styled.div`
  width: 472px;
  height: 398px;
  border: 1px solid ${colors.tags};
  margin: 100px 0;
`;

export const HeaderCard = styled.div<IHeaderCardProps>`
  background-image: url(${({ imageBackground }) => imageBackground ? imageBackground : ImageCard});
  width: 100%;
  height: 217px;
`;

export const ContainerTag = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Tag = styled.span`
  display: flex;
  padding: 8px 8px;
  background: ${colors.tags};
  margin: 8px;
  color: ${colors.background};
`;

export const TittleAndNote = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;

  .flex {
    display: flex;
    width: 55px;
    height: 21px;
    justify-content: space-around;
  }
`;

export const DescriptionCard = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding-bottom: 10px;
  margin-left: 5px;
`;
