import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Label from "./Label"
import dropdown from "./dropdown.svg"

const Outer = styled.div`
    margin-bottom: 25px;
    position: relative;
`

const Select = styled.select`
    font-size: 1em;
    width: 100%;
    padding: 12px;
    background: none;
    border: 2px solid ${theme.dark};
    color: ${theme.dark};
    border-radius: 5px;
    appearance: none;
    padding-right: 40px;
    background-image: url(${dropdown});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 45px 10px;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus}
    }
`

const SelectField = ({
    label,
    name,
    placeholder,
    onChange,
    required,
    children
}) =>
    <Outer>
        <Label 
            htmlFor={name}
            required={required}
        >
            {label}
        </Label>
        <Select
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            id={name}
            required={required}
        >
            {children}
        </Select>
    </Outer>

SelectField.defaultProps = {
    name: "select"
}

export default SelectField