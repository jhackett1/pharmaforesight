import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import DialGraphic from "./DialGraphic"

const Container = styled.div`
    position: sticky;
    top: 50px;
`

const ExpandingRings = styled.div`
    z-index: -2;
    border-radius: 100%;
    top: 6.3%;
    left: 6.3%;
    right: 6.3%;
    bottom: 6.3%;
    padding: 20px;
    transition: 1s;
    position: absolute;
    box-shadow: 0px 0px 80px ${theme.brightGreen}
    animation: pulsate 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    @keyframes pulsate{
        from{
            opacity: 0.95
        }
        50%{
            opacity: 0.1;
        }
        to{
            opacity: 0.95;
        }
    }
`

const TextHolder = styled.div`
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border-radius: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media screen and (min-width: 850px) {
        padding: 55px;
    }
`

const Probability = styled.p`
    font-size: 2em;
    font-weight: bold;
    color: ${theme.dark};
    @media screen and (min-width: 850px) {
       font-size: 4.5em;
    }
    animation: fadeIn 0.2s ease-out;
    @keyframes fadeIn{
        0%{opacity: 0;}
        100%{opacity: 1;}
    }
`

const Explanation = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    color: ${theme.dark};
    margin-bottom: 10px;
    animation: fadeIn 0.2s ease-out;
    @keyframes fadeIn{
        0%{opacity: 0;}
        100%{opacity: 1;}
    }
`

const Improve = styled.button`
    font-size: 1em;
    text-decoration: underline;
    border: none;
    background: none;
    cursor: pointer;
    color: ${theme.purple1};
    &:hover{
        text-decoration: none;
    }
    &:focus{
        background: ${theme.focus};
        outline: 3px solid ${theme.focus};
    }
    animation: fadeIn 0.2s ease-out;
    @keyframes fadeIn{
        0%{opacity: 0;}
        100%{opacity: 1;}
    }
`

const Message = styled.p`
    color: ${theme.purple2};
    font-size: 1.4em;
    animation: fadeIn 0.2s ease-out;
    @keyframes fadeIn{
        0%{opacity: 0;}
        100%{opacity: 1;}
    }
`

const PulsingMessage = styled(Message)`
    animation: pulsate 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
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
`

const Dial = ({
    condition,
    score ,
    onAction
}) => {

    let percentage = score ? Math.floor(score*100) : false

    return (
        <div>
            <Container aria-live="polite">
                {(condition === "thinking") && <ExpandingRings/>}
                <DialGraphic percentage={percentage} condition={condition}/>
                <TextHolder>
                    { condition === "initial" && <Message>Answer some questions to get started</Message>}
                    { condition === "thinking" && <PulsingMessage>Thinking...</PulsingMessage>}
                    {( condition === "finished" && percentage) && 
                        <>
                            <Probability>{percentage}%</Probability>
                            <Explanation>Probability of trial success</Explanation>
                            <Improve onClick={onAction}>Improve your prediction</Improve>
                        </>
                    }
                </TextHolder>
            </Container>
        </div>
    )
}

Dial.defaultProps = {
    condition: "initial"
}

export default Dial