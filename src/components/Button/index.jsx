import styled from "styled-components"
import theme from "../_theme"

const Button = styled.button`
    width: 100%;
    display: block;
    background: ${theme.dark};
    color: ${theme.white};
    border-radius: 100px;
    border: 2px solid ${theme.dark};
    padding: 20px 15px;
    font-size: 1em;
    cursor: pointer;
    font-weight: bold;
    position: relative;
    transition: transform 0.1s ease-out, filter 0.2s ease-out;
    &:hover{
        filter: brightness(1.05)
    }
    &:active{
        transform: scale(0.95);
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};
    }
    &[disabled]{
        pointer-events: none;
        background: ${theme.purple2};
        border-color: ${theme.purple2};
    }

`

export const PrimaryButton = styled(Button)`
    background: ${theme.brightGreen};
    border: none;
    color: ${theme.dark};
    &:after{
        position: absolute;
        top: 0px;
        z-index: 0;
        left: 7%;
        content: "";
        display: block;
        width: 86%;
        height: 100%;
        border-radius: 100px;
        box-shadow: 0px 10px 20px 0px ${theme.brightGreen};
        opacity: 0.3;
    }
    &[disabled]{
        pointer-events: none;
        background: ${theme.brightGreen};
        /* border-color: ${theme.purple2}; */
    }
`

export default Button