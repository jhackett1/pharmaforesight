import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.section`
    background: ${theme.white};
    padding: 25px;
    border-radius: 5px;
    color: ${theme.dark};
`

const Panel = ({
    children
}) =>
    <Outer>
        {children}
    </Outer>

export default Panel