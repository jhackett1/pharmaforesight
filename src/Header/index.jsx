import React from "react"
import logo from "./logo.png"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.header`
    color: ${theme.white};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 35px 25px 85px 25px;
    position: relative;
    &:before{
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #124456, #612776);
        mix-blend-mode: color;
        z-index: -1;
    }
    @media screen and (min-width: 850px){
        padding: 55px 25px 105px 25px;
    }
`

const Img = styled.img`
    max-width: 100%;
    margin-bottom: 15px;
`

const P = styled.p`
    font-size: 1.2em;
    @media screen and (min-width: 850px){
        font-size: 1.4em;
        max-width: 380px;
    }
`

const Header = () =>
    <Outer>
        <Img src={logo} alt="PharmaForesight"/>
        <P>To get started, answer some questions about your trial.</P>
    </Outer>

export default Header