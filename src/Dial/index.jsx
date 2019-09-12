import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Container = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Outer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    flex: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 20px;
    background: linear-gradient(${theme.brightPurple}, ${theme.brightBlue})
`

const Inner = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: ${theme.pageBackground};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Message = styled.p`
    color: ${theme.lighterPlaceholder};
    font-size: 1.2em;
    text-align: center;
    max-width: 200px;
`

const Dial = ({
    condition,
    score 
}) =>
    <Container>
        <Outer>
            <Inner>
                <Message>Answer some questions to get started</Message>
            </Inner>
        </Outer>
    </Container>

export default Dial