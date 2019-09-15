import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import Label from "./Label"

const Outer = styled.div`
    margin-bottom: 25px;
`

const Values = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Slider = styled.input`
    width: 100%;
    appearance: none;
    height: 2px;
    background: ${theme.purple2};
    &:focus{
        outline: none;
    }
`

const Span = styled.span`
    font-size: 0.9em;
    color: ${theme.purple1};
`

const Input = styled.input`
    font-size: 1em;
    width: 100%;
    background: none;
    border: none;
    color: ${theme.dark};
    border-radius: 5px;
    text-align: center;
    max-width: 70px;
    appearance: textfield;

    &::-webkit-inner-spin-button{
        appearance: none;
    }
    &::-webkit-outer-spin-button{
        appearance: none;
    }

    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus}
    }
`

const SliderField = ({
    min,
    max,
    step,
    name
}) => {
    const [ value, setValue ] = useState(0)
    return(
        <Outer>
            <Label 
                required 
                htmlFor={name}
            >
                Label
            </Label>
            <Values>
                <Span>{min}</Span>
                <Input 
                    value={value} 
                    type="number" 
                    max={max} 
                    min={min} 
                    step={step} 
                    onChange={e => setValue(e.target.value)}
                    required
                    name={name}
                    id={name}
                />
                <Span>{max}</Span>
            </Values>
            <Slider
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={e => setValue(e.target.value)}
                type="range"
                required
            />
        </Outer>
    )
}

SliderField.defaultProps = {
    min: 0,
    max: 1,
    step: 0.01,
    name: "slider"
}

export default SliderField