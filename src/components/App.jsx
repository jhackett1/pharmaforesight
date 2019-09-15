import React, { useState, useContext } from "react"
import { DataContext } from "../contexts/DataContext"
import { makePrediction } from "../lib/actions"

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
import DetailsDialog from "./dialogs/DetailsDialog"

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
  margin-bottom: 20px;
  grid-column: 1 / 3;
  margin-top: 30px;
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

  const { condition, setCondition, setScore } = useContext(DataContext)
  const [dialogOpen, setDialogOpen] = useState(false)

  const [formData, setFormData] = useState({
    start_date: new Date()
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setCondition("thinking")
    const probability = await makePrediction(formData)
    setScore(probability)
    setCondition("finished")
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
                  name="drug_trial"
                  onChange={handleChange}
                  value={formData.drug_trial || ""}
                />
                <TextField
                  label="Concept unique identifier"
                  placeholder="C..."
                  required
                  name="cui"
                  onChange={handleChange}
                  value={formData.cui || ""}
                />
                <TextField
                  label="Indication"
                  required
                  placeholder="eg. tardive dyskinesia"
                  name="indication"
                  onChange={handleChange}
                  value={formData.indication || ""}
                />
                <TextField
                  label="Target"
                  placeholder="eg. SLC18A2"
                  required
                  name="target"
                  onChange={handleChange}
                  value={formData.target || ""}
                />
                <TextField
                  label="Tree code"
                  required
                  placeholder="eg. C23"
                  name="treecode"
                  onChange={handleChange}
                  value={formData.treecode || ""}
                />
                <Subheadline>Mechanism of action</Subheadline>
                <TextField
                  label="Action"
                  required
                  placeholder="eg. antagonist"
                  name="moa_action"
                  onChange={handleChange}
                  value={formData.moa_action || ""}
                />
                <TextField
                  label="Target"
                  required
                  placeholder="eg. SLC18A2"
                  name="moa_target"
                  onChange={handleChange}
                  value={formData.moa_target || ""}
                />
              </FormColumns>
            </FirstPanel>

            <Panel>
              <Headline>About the trial</Headline>
              <FormColumns>
                <DateField
                  label="Start date"
                  required
                  name="start_date"
                  onChange={value => setFormData({
                    ...formData,
                    start_date: value
                  })}
                  value={formData.start_date}
                />
                <DateField
                  label="End date"
                  name="end_date"
                  onChange={value => setFormData({
                    ...formData,
                    end_date: value
                  })}
                  value={formData.end_date || ""}
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
                  placeholder="eg. Pfizer"
                  name="sponsor"
                  onChange={handleChange}
                  value={formData.sponsor || ""}
                />
                <TextField
                  label="NCT identifier"
                  placeholder="NCT..."
                  required
                  name="nct_id"
                  onChange={handleChange}
                  value={formData.nct_id || ""}
                />

                <CheckboxField
                  label="Is the trial complete?"
                  bottomMargin
                  onChange={e => e.target.checked ? setFormData({
                    ...formData,
                    trial_completed: true
                  }) : setFormData({
                    ...formData,
                    trial_completed: false
                  })}
                  checked={formData.trial_completed || false}
                  name="trial_completed"
                />

              </FormColumns>
              <PrimaryButton 
                type="submit"
                disabled={condition === "thinking"}
              >
                {condition === "initial" ? "Predict" : "Recalculate"}
              </PrimaryButton>
            </Panel>

          </form>
          <CallToAction onAction={()=> setDialogOpen(true)}/>
        </aside>

        <Dial onAction={()=> setDialogOpen(true)}/>

      </Columns>

      <DetailsDialog open={dialogOpen} handleDismiss={()=> setDialogOpen(false)}/>

    </Layout>
  )
}

export default App