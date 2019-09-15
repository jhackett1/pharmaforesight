import React from "react"
import { Dialog } from "@reach/dialog"
import styled from "styled-components"
import theme from "../_theme"
import { PrimaryButton } from "../Button"
import cross from "./cross.svg"

const StyledDialog = styled(Dialog)`
    max-width: 600px;
    background: ${theme.white};
    border-radius: 5px;
    color: ${theme.dark};
    padding: 25px;
    box-shadow: 0px 2px 5px rgba(10,2,79,0.1);
    @media screen and (min-width: 850px) {
        padding: 50px;
        margin-bottom: 35px;
    }
`

const DetailsDialog = ({
    open,
    handleDismiss
}) =>
    <StyledDialog isOpen={open} onDismiss={handleDismiss}>
            <button onClick={handleDismiss}><img src={cross}/></button>
            <h2>Improve your prediction</h2>
            <form>
                <PrimaryButton>Recalculate</PrimaryButton>
            </form>

    </StyledDialog>

export default DetailsDialog