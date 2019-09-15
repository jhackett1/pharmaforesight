import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Label from "./Label"
import dropdown from "./dropdown.svg"

const Outer = styled.div`
    margin-bottom: 20px;
    position: relative;
    &::before{
        content: "";
        display: block;
        height: 15px;
        width: 15px;
        position: absolute;
        right: 15px;
        bottom: 17px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${dropdown});
    }
`

const Select = styled.select`
    font-size: 1em;
    width: 100%;
    padding: 12px;
    background: #F8F8FB;
    border: 2px solid ${theme.dark};
    color: ${theme.dark};
    border-radius: 5px;
    appearance: none;
    padding-right: 40px;
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
    required
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
            <option>Blah</option>
        </Select>
    </Outer>

SelectField.defaultProps = {
    name: "select"
}

export default SelectField