import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import theme from "../_theme"

const Style = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Karla', sans-serif;
    }
    body{
        background: ${theme.background}
    }
`

const Main = styled.main`
    overflow: hidden;
`

const Layout = ({
    children
}) =>
    <>
        <Style/>
        <Header/>
        <Main>
            {children}
        </Main>
        <Footer/>
    </>

export default Layout