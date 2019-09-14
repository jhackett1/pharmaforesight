import React, { useState } from "react"
import TextField from "./TextField"
import DateField from "./DateField"
import SelectField from "./SelectField"

const Form = () => {
    const [date, setDate ] = useState(false)
    return(
        <form>
            <TextField
                label="Blah"
            />

            <DateField
                label="Start date"
                required
                value={date}
                onChange={value => setDate(value)}
            />
            <SelectField/>
            
            <button type="submit">submit</button>
        </form>
    )
}


export default Form