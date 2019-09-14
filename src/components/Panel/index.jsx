import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.section`
    background: ${theme.white};
    border-radius: 5px;
    color: ${theme.dark};
    margin-bottom: 25px;
    overflow: hidden;
`

export const InnerPanel = styled.div`
    padding: 25px;
`

const Panel = ({
    children
}) =>
    <Outer>
        {children}
    </Outer>

export default Panel

