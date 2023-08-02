import styled from "styled-components";
import { colors } from "../../GlobalStyles";
import Pizza from '../../assets/images/pizza.png'
import { ButtonSubmit } from "../Button/styled";

interface ICardProps {
    background?: string
}


export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${colors.tags};
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0 ;
`

export const HeaderCard = styled.div<ICardProps>`
    background-image: url(${Pizza});
    width: 304px;
    height: 167px;
    margin: 0 auto;
`

export const Descriptions =styled.div`
    text-align: left;
    padding-left: 10px;
    width: 90%;

    h2{
    font-size: 16px;
    font-weight: 900;
    line-height: 19px;
    letter-spacing: 0em;
    color: ${colors.background};
    margin-bottom: 12px;

    }

    p{
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: ${colors.background};
    }

    ${ButtonSubmit}{
    
    }
`
