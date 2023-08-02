import { styled } from "styled-components"
import { colors } from "../../GlobalStyles"
import {IButtonProps} from '.'

export const ButtonSubmit = styled.button<IButtonProps>`
    width: ${props => props.size === 'small' ? '85px' : '304px'};
    height: 28px;
    background-color: ${props => props.size === 'small' ? colors.tittleSections : colors.background};
    color: ${props => props.size === 'small'? colors.background : colors.tags};
    border: none;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    cursor: pointer;
    margin-left: 5px;


`