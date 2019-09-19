import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import styled from "styled-components"
import theme from "../_theme"
import Label from "./Label"

const Outer = styled.div`
    margin-bottom: 25px;
`

const StyledDatePicker = styled(DatePicker)`
    font-size: 1em;
    width: 100%;
    padding: 12px;
    border: 2px solid ${theme.dark};
    color: ${theme.dark};
    border-radius: 5px;
    background: #F8F8FB;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus}
    }
`

const DateField = ({
    value,
    label,
    name,
    placeholder,
    onChange,
    required,
    ...props
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
            dateFormat="yyyy-MM-dd"
            id={name}
            required={required}
            {...props}
        />
    </Outer>

DateField.defaultProps = {
    name: "date"
}

export default DateField