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
    }
`

export const Container = styled.div`
    width: 100vw;
    height: auto;
`