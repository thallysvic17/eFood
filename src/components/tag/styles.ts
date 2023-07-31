import { styled } from "styled-components"
import {Props} from '.'
import { colors } from "../../GlobalStyles"

export const TagContainer = styled.div<Props>`
    background-color: ${colors.tags};
    color: ${colors.white};
    font-size: 12px;
    font-weight: 700;
    width: ${props => props.size === 'large' ? '113px' :'60px'};
    height: 26px;
    text-align: center ;
    padding-top: 5px;
`