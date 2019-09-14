import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import styled from "styled-components"
import theme from "../_theme"
import Label from "./Label"

const Outer = styled.div`
    margin-bottom: 20px;
`

const StyledDatePicker = styled(DatePicker)`
    font-size: 1em;
    width: 100%;
    padding: 12px;
    border: 2px solid ${theme.dark};
    color: ${theme.dark};
    border-radius: 5px;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.brightGreen}
    }
`

const DateInput = ({
    value,
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
        <StyledDatePicker 
            name={name}
            selected={value} 
            onChange={onChange} 
            dateFormat="dd/MM/yyyy"
            id={name}
            required={required}
        />
    </Outer>

export default DateInput