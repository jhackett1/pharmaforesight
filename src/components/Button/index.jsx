import styled from "styled-components"
import theme from "../_theme"

const Button = styled.button`
    width: 100%;
    display: block;
    background: ${theme.brightGreen};
    color: ${theme.dark};
    padding: 15px;
    font-size: 1em;
    border: none;
    cursor: pointer;
`

export default Button