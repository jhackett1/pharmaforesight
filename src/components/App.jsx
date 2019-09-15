import React, { useState } from "react"
import Layout from "./Layout"
import styled from "styled-components"
import Dial from "./Dial"
import Panel, { InnerPanel } from "./Panel"
import TextField from "./fields/TextField"
import DateField from "./fields/DateField"
import SelectField from "./fields/SelectField"
import SliderField from "./fields/SliderField"
import CheckboxField from "./fields/CheckboxField"
import Button from "./Button"

const Columns = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 25px;
  @media screen and (min-width: 850px) {
    display: grid;
    grid-template-columns: 4fr 3fr;
    grid-column-gap: 80px;
  }
`

const Headline = styled.h2`
  margin-bottom: 25px;
`

const App = () => {
  const [condition, setCondition] = useState("initial")
  const [date, setDate ] = useState(new Date())
  const [bool, setBool] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    setCondition("thinking")
  }

  return(
    <Layout>
      {condition}
      <Columns>

        <form onSubmit={handleSubmit}>
          <Panel>
            <InnerPanel>

              <Headline>About the drug</Headline>

              <TextField
                  label="Blah"
              />
              <DateField
                  label="Start date"
                  required
                  value={date}
                  onChange={value => setDate(value)}
              />
              <SelectField
                label="Phase"
              />
              <SliderField/>

              <CheckboxField
                label="Is the trial complete?"
                checked={bool}
                onChange={e => e.target.checked ? setBool(true) : setBool(false)}
              />

            </InnerPanel>
          </Panel>
          <Panel>
            <InnerPanel>
              <Headline>About the trial</Headline>
              Second panel
            </InnerPanel>
            <Button type="submit">Predict</Button>
          </Panel>
        </form>

        <Dial condition={condition}/>

      </Columns>
    </Layout>
  )
}


export default App