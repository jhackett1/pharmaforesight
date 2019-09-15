import styled from "styled-components"
import theme from "../_theme"

const Button = styled.button`
    width: 100%;
    display: block;
    background: ${theme.brightGreen};
    color: ${theme.dark};
    border-radius: 0px 0px 5px 5px;
    padding: 15px;
    font-size: 1em;
    border: none;
    cursor: pointer;
    transition: filter 0.2s ease-out;
    &:hover{
        filter: brightness(1.05)
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};
    }
`

export default Button