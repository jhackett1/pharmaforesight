import React from "react"
import TextInput from "./TextInput"
import DatePicker from "./DatePicker"

const Form = () =>
    <form>
        <TextInput 
            label="Blah"
            placeholder="test"
        />
        <DatePicker
            label="Start date"
        />
    </form>

export default Form