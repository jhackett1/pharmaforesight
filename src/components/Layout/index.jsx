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
        background: ${theme.background};
    }

    .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range{
        background-color: ${theme.dark} !important;
    }

    .react-datepicker-wrapper{
        width: 100%;
    }
`

const Outer = styled.div`
    overflow: hidden;
`

const Layout = ({
    children
}) =>
    <Outer>
        <Style/>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </Outer>

export default Layout