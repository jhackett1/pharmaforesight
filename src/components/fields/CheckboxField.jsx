import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import tick from "./tick.svg"

const Outer = styled.div`
    margin-bottom: ${props => props.bottomMargin ? "25px" : "5px"};
    position: relative;
`

const Label = styled.label`
    display: block;
    font-size: 0.95em;
    color: ${theme.dark};
    margin-bottom: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:before{
        content: "";
        display: inline-block;
        margin-right: 15px;
        height: 35px;
        width: 35px; 
        flex-shrink: 0;
        border-radius: 5px;
        border: 2px solid ${theme.darkText};
        cursor: pointer;
    }
`

const Input = styled.input`
    opacity: 0;
    position: absolute;
    z-index: -1;
    &:focus + label:before{
        box-shadow: 0 0 0 3px ${theme.focus};
    }
    &:checked + label:before{
        background: ${theme.dark};
    }
    &:checked + label:after{
        position: absolute;
        content: "";
        display: block;
        height: 25px;
        width: 25px;
        left: 7px;
        top: 7px;
        background-image: url(${tick});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
    }
`

const CheckboxField = ({
    checked,
    label,
    name,
    onChange,
    bottomMargin
}) =>
    <Outer bottomMargin={bottomMargin}>
        <Input
            checked={checked}
            name={name}
            type="checkbox"
            onChange={onChange}
            id={name}
        />
        <Label 
            htmlFor={name}
        >
            {label}
        </Label>
    </Outer>

CheckboxField.defaultProps = {
    name: "checkbox"
}

export default CheckboxField