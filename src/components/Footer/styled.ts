import { styled } from "styled-components";
import { colors } from "../../GlobalStyles";

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 298px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.background};

  p {
    text-align: center;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
  }
`

export const NavLinks = styled.nav`
  ul {
    display: flex;
    gap: 15px;
  }
`
