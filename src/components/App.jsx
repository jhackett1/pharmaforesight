import React, { useState } from "react"
import Layout from "./Layout"
import styled from "styled-components"
import Dial from "./Dial"
import Panel from "./Panel"
import TextField from "./fields/TextField"
import DateField from "./fields/DateField"
import SelectField from "./fields/SelectField"
import CheckboxField from "./fields/CheckboxField"
import { PrimaryButton } from "./Button"
import CallToAction from "./CallToAction"

const Columns = styled.div`
  max-width: 1200px;
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
  @media screen and (min-width: 850px) {
    margin-bottom: 35px;
  }
`

const Subheadline = styled.h3`
  margin-bottom: 25px;
  grid-column: 1 / 3;
`

const FormColumns = styled.div`
  @media screen and (min-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 35px;
    align-items: end;
  }
  & + button {
    margin-top: 30px;
  }
`

const FirstPanel = styled(Panel)`
  margin-top: -100px;
`

const App = () => {
  const [condition, setCondition] = useState("initial")
  const [date, setDate ] = useState(new Date())
  const [bool, setBool] = useState(true)
  const [score, setScore] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setCondition("thinking")
  }

  return(
    <Layout>
      <Columns>
        <aside>



          <form onSubmit={handleSubmit}>

            <FirstPanel>
              <Headline>About the drug</Headline>
              <FormColumns>
                <TextField
                  label="Name of drug"
                  placeholder="eg. Copraxinol"
                  required
                />
                <TextField
                  label="Concept unique identifier"
                  placeholder="C..."
                  required
                />
                <TextField
                  label="Indication"
                  required
                />
                <TextField
                  label="Target"
                  required
                />
                <TextField
                  label="Tree code"
                  required
                />
                <Subheadline>Mechanism of action</Subheadline>
                <TextField
                  label="Action"
                  required
                />
                <TextField
                  label="Target"
                  required
                />
              </FormColumns>
            </FirstPanel>

            <Panel>
              <Headline>About the trial</Headline>
              <FormColumns>
                <DateField
                  label="Start date"
                  required
                  value={date}
                  onChange={value => setDate(value)}
                />
                <DateField
                  label="End date"
                  value={date}
                  onChange={value => setDate(value)}
                />
                <SelectField
                  label="Phase"
                  required
                >
                  <option value="1">I</option>
                  <option value="2">II</option>
                  <option value="3">III</option>
                  <option value="4">IV</option>
                </SelectField>
                <TextField
                  label="Sponsor"
                  required
                />
                <TextField
                  label="NCT identifier"
                  placeholder="NCT..."
                  required
                />
                <CheckboxField
                  label="Is the trial complete?"
                  checked={bool}
                  onChange={e => e.target.checked ? setBool(true) : setBool(false)}
                />
              </FormColumns>
              <PrimaryButton type="submit">Predict</PrimaryButton>
            </Panel>

          </form>
          <CallToAction/>
        </aside>

        <Dial condition={condition} score={score}/>

      </Columns>
    </Layout>
  )
}


export default App