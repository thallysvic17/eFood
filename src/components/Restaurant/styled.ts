import { styled } from "styled-components"
import sushi from '../../assets/images/sushi.png'


import { colors } from "../../GlobalStyles"

export const ContainerCard = styled.div`
    width: 472px;
    height: 398px;
    border: 1px solid ${colors.tags};
    margin: 100px 0;
`
export const HeaderCard = styled.div`
    background-image: url(${sushi});
    width: 100%;
    height: 217px;
    
    span{
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        padding: 8px 8px;
    };

`

export const TittleAndNote = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 8px;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;

    .flex{
        display: flex;
        width: 55px;
        height: 21px;
        justify-content: space-around;

    }
`

export const DescriptionCard = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    padding-bottom: 10px;
    margin-left: 5px;
`