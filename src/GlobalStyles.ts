import styled, { createGlobalStyle } from "styled-components";



export const colors = { 
    background : '#FFEBD9',
    tittleSections : '#E66767',
    white: '#fff'
}

export const GlobalCss = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background-color: ${colors.white};
        color: ${colors.tittleSections};
        width: 100vw;
        overflow-x: hidden;

    }
`

export const Container = styled.div`
            width: 80vw;
            height: auto;
            margin: 0 auto;
`