import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.footer`
    background-color: ${theme.black};
    color: ${theme.placeholder};
    text-align: center;
    padding: 35px 25px;
`

const A = styled.a`
    color: ${theme.lighterPlaceholder};
    margin-left: 10px;
    &:hover{
        text-decoration: none;
    }
`

const Footer = () =>
    <Outer>
        <p>
            © PharmaForesight 2019
            <A href="/">Privacy</A>
            <A href="/">Contact</A>
        </p>
    </Outer>

export default Footer