import React, { useState } from "react"
import TextInput from "./TextInput"
import DatePicker from "./DatePicker"

const Form = () => {
    const [date, setDate ] = useState(false)
    return(
        <form>
            <TextInput 
                label="Blah"
            />
            <DatePicker
                label="Start date"
                required
                value={date}
                onChange={value => setDate(value)}
            />
            <button type="submit">submit</button>
        </form>
    )
}


export default Form