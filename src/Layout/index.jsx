import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import { createGlobalStyle } from "styled-components"
import theme from "../_theme"

const Style = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Karla', sans-serif;
    }
    body{
        background: ${theme.pageBackground}
    }
`

const Layout = ({
    children
}) =>
    <>
        <Style/>
        <Header/>
        {children}
        <Footer/>
    </>

export default Layout