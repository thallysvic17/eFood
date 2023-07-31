import { styled } from 'styled-components';

import background from '../../assets/images/Vector.png'

export const ContentHero = styled.header`
    width: 100%;
    height: 384px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${background});
   
`

export const Logo = styled.div`
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 30px;

`

export const Title = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 35px;
`