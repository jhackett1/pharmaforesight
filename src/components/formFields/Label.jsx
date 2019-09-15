import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const BasicLabel = styled.label`
    display: block;
    font-size: 0.95em;
    color: ${theme.dark};
    margin-bottom: 7px;
`

const Optional = styled.span`
    font-size: 0.9em;
    margin-left: 5px;
    color: ${theme.purple1};
`

const Label = ({
    children,
    required,
    ...props
}) =>
    <BasicLabel {...props} >
        {children}
        {!required && <Optional>(optional)</Optional>}
    </BasicLabel>

export default Label