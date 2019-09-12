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
    @keyframes pulsate{
        from{
            opacity: 1
        }
        50%{
            opacity: 0.4;
        }
        to{
            opacity: 1;
        }
    }
    width: 100%;
    height: 100%;
    border-radius: 100%;
    flex: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 20px;
    border: 3px solid ${props => props.thinking ? theme.brightBlue : theme.panelBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    ${props => props.thinking ? `box-shadow: 0px 0px 60px ${theme.blueGlow}` : null};
    animation: pulsate 2s ease-in-out infinite;
    transition: 1s;
`

const Message = styled.p`
    color: ${theme.placeholder};
    font-size: 1.3em;
    text-align: center;
    max-width: 200px;
`

const Dial = ({
    condition,
    score 
}) => {
    if(condition === "thinking") return(
        <Container>
            <Outer thinking>
                <Message>Thinking...</Message>
            </Outer>
        </Container>
    )
    return(
        <Container>
            <Outer >
                <Message>Answer some questions to get started</Message>
            </Outer>
        </Container>
    )
}

export default Dial