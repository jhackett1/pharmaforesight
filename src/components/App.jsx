import React, { useState } from "react"
import Layout from "./Layout"
import styled from "styled-components"
import Dial from "./Dial"
import Panel, { InnerPanel } from "./Panel"
import TextField from "./formFields/TextField"
import DateField from "./formFields/DateField"
import SelectField from "./formFields/SelectField"
import Button from "./Button"

const Columns = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 25px;
  @media screen and (min-width: 850px) {
    display: grid;
    grid-template-columns: 4fr 3fr;
    grid-column-gap: 60px;
  }
`

const App = () => {
  const [condition, setCondition] = useState("initial")
  const [date, setDate ] = useState(new Date())

  return(
    <Layout>
      <Columns>

        <form>
          <Panel>
            <InnerPanel>
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
            </InnerPanel>

            <Button type="submit">submit</Button>
          </Panel>
          <Panel>
            Second panel
          </Panel>
        </form>

        <Dial condition={condition}/>

      </Columns>
    </Layout>
  )
}


export default App