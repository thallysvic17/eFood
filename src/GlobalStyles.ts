import styled, { createGlobalStyle } from "styled-components";



export const colors = { 
    background : '#FFEBD9',
    tittleSections : '#E66767',
    tags : '#E66767',
    hero : '#FFEBD9',
    white: '#fff'
}

export const GlobalCss = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
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

export const ListContainer =styled.div`
    width: 80%;
    height: auto;
    border: 1px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;

`