import React, { useState, useContext } from "react"
import { DataContext } from "../contexts/DataContext"
import { makePrediction, refinePrediction } from "../lib/actions"
import querystring from "querystring"

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

  let urlQuery = {}
  try {
    urlQuery = querystring.parse(window.location.search.substr(1))
  } catch(e) {
    // ignore malformed uris
  }

  const [basicData, setBasicData] = useState({
    ...urlQuery,
    trial_completed: 0,
    start_date: urlQuery.start_date ? new Date(urlQuery.start_date) : new Date(),
    end_date: urlQuery.end_date ? new Date(urlQuery.end_date) : ""
  })
  const [additionalData, setAdditionalData] = useState({})

  const handleChange = e => {
    setBasicData({
      ...basicData,
      [e.target.name]: e.target.value
    })
  }

  const handlePredict = async (e) => {
    e.preventDefault()
    setCondition("thinking")
    const { probability, detailedData } = await makePrediction(basicData)
    if(probability){
      setAdditionalData(detailedData)
      setScore(probability)
      setCondition("finished")
    } else {
      setCondition("error")
    }
  }

  const handleRefine = async (e) => {
    e.preventDefault()
    setCondition("thinking")
    const probability = await refinePrediction(additionalData)
    if(probability){
      setScore(probability)
      setCondition("finished")
    } else {
      setCondition("error")
    }
  }

  return(
    <Layout>
      <Columns>
        <aside>
          <form onSubmit={handlePredict}>

            <FirstPanel>
              <Headline>About the drug</Headline>
              <FormColumns>
                <TextField
                  label="Name of drug ingredient"
                  placeholder="eg. Copraxinol"
                  required
                  name="drug_trial"
                  onChange={handleChange}
                  value={basicData.drug_trial || ""}
                />
                <TextField
                  label="NLM indication identifier (CUI)"
                  placeholder="C..."
                  required
                  name="cui"
                  onChange={handleChange}
                  value={basicData.cui || ""}
                />
                <TextField
                  label="Indication"
                  required
                  placeholder="eg. tardive dyskinesia"
                  name="indication"
                  onChange={handleChange}
                  value={basicData.indication || ""}
                />
                <TextField
                  label="Target(s)"
                  placeholder="eg. SLC18A2"
                  required
                  name="target"
                  onChange={handleChange}
                  value={basicData.target || ""}
                />
                <TextField
                  label="NLM therapeutic area (MeSH)"
                  required
                  placeholder="eg. C23"
                  name="treecode"
                  onChange={handleChange}
                  value={basicData.treecode || ""}
                />
                <Subheadline>Mechanism of action</Subheadline>
                <TextField
                  label="Action(s)"
                  required
                  placeholder="eg. antagonist"
                  name="moa_action"
                  onChange={handleChange}
                  value={basicData.moa_action || ""}
                />
                <TextField
                  label="Target(s)"
                  required
                  placeholder="eg. SLC18A2"
                  name="moa_target"
                  onChange={handleChange}
                  value={basicData.moa_target || ""}
                />
              </FormColumns>
            </FirstPanel>

            <Panel>
              <Headline>About the trial</Headline>

              {/* {formData.start_date} */}

              <FormColumns>
                <DateField
                  label="Start date"
                  required
                  name="start_date"
                  onChange={value => setBasicData({
                    ...basicData,
                    start_date: value
                  })}
                  value={basicData.start_date}
                />
                <DateField
                  label="End date"
                  name="end_date"
                  onChange={value => setBasicData({
                    ...basicData,
                    end_date: value
                  })}
                  value={basicData.end_date || ""}
                />
                
                <SelectField
                  label="Phase"
                  required
                  name="phase"
                  value={basicData.phase || ""}
                  onChange={handleChange}
                >
                  <option value="Phase 2">II</option>
                  <option value="Phase 3">III</option>
                </SelectField>

                <TextField
                  label="Sponsor"
                  required
                  placeholder="eg. Pfizer"
                  name="sponsor"
                  onChange={handleChange}
                  value={basicData.sponsor || ""}
                />
                <TextField
                  label="NCT identifier"
                  placeholder="NCT..."
                  required
                  name="nct_id"
                  onChange={handleChange}
                  value={basicData.nct_id || ""}
                />

                <CheckboxField
                  label="Is the trial complete?"
                  bottomMargin
                  onChange={e => e.target.checked ? setBasicData({
                    ...basicData,
                    trial_completed: true
                  }) : setBasicData({
                    ...basicData,
                    trial_completed: false
                  })}
                  checked={basicData.trial_completed || false}
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

      <DetailsDialog 
        formData={additionalData} 
        setFormData={setAdditionalData}
        open={dialogOpen} 
        handleDismiss={()=> setDialogOpen(false)}
        handleSubmit={handleRefine}
      />

    </Layout>
  )
}

export default App