import React from "react"
import Dialog from "./index"
import styled from "styled-components"
// import theme from "../_theme"
import { PrimaryButton } from "../Button"
import TextField from "../fields/TextField"
import CheckboxField from "../fields/CheckboxField"
import SliderField from "../fields/SliderField"

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

const DialogFooter = styled.footer`
    position: sticky;
    bottom: 0px;
    padding: 25px 0px;
    background: linear-gradient(to bottom, rgba(248,248,251,0), rgba(248,248,251,1));
    @media screen and (min-width: 850px){
        padding: 35px 0px;
    }
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

const DetailsDialog = ({
    open,
    handleDismiss,
    formData
}) => {




    return(
        <Dialog open={open} handleDismiss={handleDismiss}>
            <Headline>Improve your prediction</Headline>
            <form>
                <FormColumns>

                    <TextField
                        type="number"
                        label="Number of facilities"
                        min="1"
                        step="1"
                        name="site_number_of_facilities"
                        value={formData.site_number_of_facilities || ""}
                    />
                    <TextField
                        type="number"
                        label="Number of patients"
                        min="1"
                        step="1"
                        name="td_accrual"
                        value={formData.td_accrual || ""}
                    />
                    <TextField
                        type="number"
                        min="1"
                        label="Study duration (in days)"
                        name="td_duration"
                        value={formData.td_duration || ""}
                    />
                    <CheckboxField
                        label="Orphan status?"
                        bottomMargin
                    />

                    <Subheadline>Prior approval</Subheadline>
                    <CheckboxField
                        label="For indication?"
                    />   
                    <CheckboxField
                        label="For mechanism of action?"
                    />   

                    <Subheadline>Investigator experience</Subheadline>
                    <SliderField
                        label="Phase 1"
                        min="0"
                        max="10"
                        step="1"
                        name="invest_phase1_total"
                        value={formData.invest_phase1_total || ""}
                    />
                    <SliderField
                        label="Phase 2"
                        min="0"
                        max="10"
                        step="1"
                        name="invest_phase2_total"
                        value={formData.invest_phase2_total || ""}
                    />
                    <SliderField
                        label="Phase 3"
                        min="0"
                        max="10"
                        step="1"
                        name="invest_phase3_total"
                        value={formData.invest_phase3_total || ""}
                    />


                    <Subheadline>Sponsor experience</Subheadline>
                    <SliderField
                        label="Phase 1"
                        min="0"
                        max="10"
                        step="1"
                        name="sponsor_phase1_total"
                        value={formData.sponsor_phase1_total || ""}
                    />
                    <SliderField
                        label="Phase 2"
                        min="0"
                        max="10"
                        step="1"
                        name="sponsor_phase2_total"
                        value={formData.sponsor_phase2_total || ""}
                    />
                    <SliderField
                        label="Phase 3"
                        min="0"
                        max="10"
                        step="1"
                        name="sponsor_phase3_total"
                        value={formData.sponsor_phase3_total || ""}
                    />

                    <Subheadline>Trial design</Subheadline>
                    <CheckboxField
                        label="Single arm?"
                    />   
                    <CheckboxField
                        label="Multiple arms?"
                    />   
                    <CheckboxField
                        label="Masking?"
                    />   
                    <CheckboxField
                        label="Non-inferiority?"
                    />   
                    <CheckboxField
                        label="Open label?"
                    />   
                    <CheckboxField
                        label="Randomised?"
                    />   
                    <CheckboxField
                        label="Active comparator?"
                    />
                    <CheckboxField
                        label="Placebo comparator?"
                    />   


                    <Subheadline>Sites in...</Subheadline>
                    <CheckboxField
                        label="Canada?"
                    />
                    <CheckboxField
                        label="China?"
                    />
                    <CheckboxField
                        label="France?"
                    />
                    <CheckboxField
                        label="Germany?"
                    />
                    <CheckboxField
                        label="Italy?"
                    />
                    <CheckboxField
                        label="UK?"
                    />
                    <CheckboxField
                        label="US?"
                    />

                </FormColumns>
                <DialogFooter>
                    <PrimaryButton>Recalculate</PrimaryButton>
                </DialogFooter>

            </form>
        </Dialog>
    )
}

export default DetailsDialog