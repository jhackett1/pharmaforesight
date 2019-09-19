import React, { useContext } from "react"
import { DataContext } from "../../contexts/DataContext"
import styled from "styled-components"
import theme from "../_theme"
import Button from "../Button"

const Outer = styled.section`
    border: 2px solid ${theme.dark};
    border-radius: 5px;
    color: ${theme.dark};
    margin-bottom: 25px;
    position: relative;
    z-index: 1;
    padding: 25px;
    @media screen and (min-width: 850px) {
        padding: 50px;
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-column-gap: 30px;
        align-items: center;
    }
`

const Headline = styled.h2`
    margin-bottom: 10px;
`

const P = styled.p`
    margin-bottom: 25px;
    @media screen and (min-width: 850px) {
        margin-bottom: 0px;
    }
`

const CallToAction = ({
    onAction
}) => {
    const { condition } = useContext(DataContext)
    return(
        <Outer>
            <div>
                <Headline>Refine your prediction</Headline>
                <P>We’ve based our prediction on gathering information from the public domain. You can explore different scenarios by altering various data inputs.</P>
            </div>
            <Button 
                onClick={onAction}
                disabled={condition !== "finished"}
            >
                Refine
            </Button>
        </Outer>
    )
}

export default CallToAction

