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
    padding: 0px 0px 25px 0px;
    background: linear-gradient(to bottom, rgba(248,248,251,0), rgba(248,248,251,1));
    @media screen and (min-width: 850px){
        padding: 0px 0px 35px 0px;
    }
`

const FormColumns = styled.div`
    margin-bottom: 25px;
  @media screen and (min-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 35px;
    align-items: end;
    margin-bottom: 35px;
  }
  & + button {
    margin-top: 30px;
  }
`

const DetailsDialog = ({
    open,
    handleDismiss,
    formData,
    setFormData,
    handleSubmit
}) => {

    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
    }

    const handleCheckboxChange = e => {
        e.target.checked ? setFormData({
            ...formData,
            [e.target.name]: true
        }) : setFormData({
            ...formData,
            [e.target.name]: false
        })
    }

    return(
        <Dialog open={open} handleDismiss={handleDismiss}>
            <Headline>Improve your prediction</Headline>
            <form onSubmit={e => {
                handleSubmit(e)
                handleDismiss()
            }}>
                <FormColumns>

                    <TextField
                        type="number"
                        label="Number of facilities"
                        min="1"
                        step="1"
                        name="site_number_of_facilities"
                        value={formData.site_number_of_facilities || ""}
                        onChange={handleChange}
                    />
                    <TextField
                        type="number"
                        label="Number of patients"
                        min="1"
                        step="1"
                        name="td_accrual"
                        value={formData.td_accrual || ""}
                        onChange={handleChange}
                    />
                    <TextField
                        type="number"
                        min="1"
                        label="Study duration (in days)"
                        name="td_duration"
                        value={formData.td_duration || ""}
                        onChange={handleChange}
                    />
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="Orphan status?"
                        bottomMargin
                        name="reg_orphan"
                        checked={formData.reg_orphan || false}
                    />

                    <Subheadline>Prior approval</Subheadline>
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="For indication?"
                        name="indication_precedent"
                        checked={formData.indication_precedent || false}
                    />   
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="For mechanism of action?"
                        name="moa_precedent"
                        checked={formData.moa_precedent || false}
                    />   

                    <Subheadline>Investigator experience</Subheadline>
                    <SliderField
                        label="Phase 1"
                        min="0"
                        max="10"
                        step="1"
                        name="invest_phase1_total"
                        value={formData.invest_phase1_total || 0}
                        onChange={handleChange}
                    />
                    <SliderField
                        label="Phase 2"
                        min="0"
                        max="10"
                        step="1"
                        name="invest_phase2_total"
                        value={formData.invest_phase2_total || 0}
                        onChange={handleChange}
                    />
                    <SliderField
                        label="Phase 3"
                        min="0"
                        max="10"
                        step="1"
                        name="invest_phase3_total"
                        value={formData.invest_phase3_total || 0}
                        onChange={handleChange}
                    />


                    <Subheadline>Sponsor experience</Subheadline>
                    <SliderField
                        label="Phase 1"
                        min="0"
                        max="10"
                        step="1"
                        name="sponsor_phase1_total"
                        value={formData.sponsor_phase1_total || 0}
                        onChange={handleChange}
                    />
                    <SliderField
                        label="Phase 2"
                        min="0"
                        max="10"
                        step="1"
                        name="sponsor_phase2_total"
                        value={formData.sponsor_phase2_total || 0}
                        onChange={handleChange}
                    />
                    <SliderField
                        label="Phase 3"
                        min="0"
                        max="10"
                        step="1"
                        name="sponsor_phase3_total"
                        value={formData.sponsor_phase3_total || 0}
                        onChange={handleChange}
                    />

                    <Subheadline>Trial design</Subheadline>
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="Single arm?"
                        name="td_single_arm"
                        checked={formData.td_single_arm | false}
                    />   
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="Multiple arms?"
                        name="td_multiple_arms"
                        checked={formData.td_multiple_arms | false}
                    />   
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="Masking?"
                        name="td_masking"
                        checked={formData.td_masking | false}
                    />   
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="Non-inferiority?"
                        name="td_non_inferiority"
                        checked={formData.td_non_inferiority | false}
                    />   
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="Open label?"
                        name="td_open_label"
                        checked={formData.td_open_label | false}
                    />   
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="Randomised?"
                        name="td_randomized"
                        checked={formData.td_randomized | false}
                    />   
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="Active comparator?"
                        name="td_active_comp"
                        checked={formData.td_active_comp | false}
                    />
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="Placebo comparator?"
                        name="td_placebo_comp"
                        checked={formData.td_placebo_comp | false}
                    />   


                    <Subheadline>Sites in...</Subheadline>
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="Canada?"
                        name="site_c_can"
                        checked={formData.site_c_can | false}
                    />
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="China?"
                        name="site_c_chn"
                        checked={formData.site_c_chn | false}
                    />
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="France?"
                        name="site_c_fra"
                        checked={formData.site_c_fra | false}
                    />
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="Germany?"
                        name="site_c_ger"
                        checked={formData.site_c_ger | false}
                    />
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="Italy?"
                        name="site_c_ita"
                        checked={formData.site_c_ita | false}
                    />
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="UK?"
                        name="site_c_uk"
                        checked={formData.site_c_uk | false}
                    />
                    <CheckboxField
                        onChange={handleCheckboxChange}
                        label="US?"
                        name="site_c_us"
                        checked={formData.site_c_us | false}
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