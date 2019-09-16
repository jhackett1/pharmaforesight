import React from "react"
import logo from "./logo.png"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.header`
    color: ${theme.white};
    text-align: center;
    z-index: 1;
    padding: 35px 25px 105px 25px;
    position: relative;
    background: ${theme.dark};
    @media screen and (min-width: 850px){
        padding: 45px 25px 125px 25px;
    }
`

const Animated = styled.div`
    @keyframes fadeInOut{
        from{
            transform: scale(0.7);
            opacity: 0;
        }
        to{
            transform: scale(1);
            opacity: 1;
        }
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: fadeInOut 1s ease-out;
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
        <Animated>
            <Img src={logo} alt="PharmaForesight"/>
            <P>To get started, answer some questions about your trial.</P>
        </Animated>
    </Outer>

export default Header