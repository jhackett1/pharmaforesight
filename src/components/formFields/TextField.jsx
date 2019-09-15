import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Label from "./Label"

const Outer = styled.div`
    margin-bottom: 20px;
`

const Input = styled.input`
    font-size: 1em;
    width: 100%;
    padding: 12px;
    background: #F8F8FB;
    border: 2px solid ${theme.dark};
    color: ${theme.dark};
    border-radius: 5px;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus}
    }
    &::placeholder{
        color: ${theme.purple1}
    }
`

const TextField = ({
    value,
    label,
    name,
    type,
    placeholder,
    onChange,
    required
}) =>
    <Outer>
        <Label 
            htmlFor={name}
            required={required}
        >
            {label}
        </Label>
        <Input
            value={value}
            name={name}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            id={name}
            required={required}
        />
    </Outer>

TextField.defaultProps = {
    type: "text",
    name: "text"
}

export default TextField