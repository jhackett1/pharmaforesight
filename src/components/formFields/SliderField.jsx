import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import Label from "./Label"

const Outer = styled.div`
    margin-bottom: 20px;
`

const Input = styled.input`
    width: 100%;
    appearance: none;
    height: 2px;
    background: ${theme.purple2};
    &:focus{
        outline: none;
    }

`

const SliderField = () =>
    <Outer>
        <Label 
        >
            Label
        </Label>
        <Input
            type="range"
        />
    </Outer>

export default SliderField