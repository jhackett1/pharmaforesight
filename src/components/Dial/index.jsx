import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import DialGraphic from "./DialGraphic"

const Container = styled.div`
    position: sticky;
    top: 50px;
`

const OuterRing = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    flex: 1;
    top: 0px;
    left: 0px;
    padding: 20px;
    border: 3px solid ${theme.purple3};
    box-shadow: 0px 0px 0px ${theme.brightGreen};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
    position: relative;
`

const ThinkingOuterRing = styled(OuterRing)`
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
    @keyframes grow{
        from{
            transform: scale(1);
            opacity: 1;
        }
        to{
            transform: scale(2);
            opacity: 0;
        }
    }
    border: 3px solid ${theme.brightGreen};
    box-shadow: 0px 0px 60px ${theme.brightGreen};
    animation: pulsate 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    &:after{
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        flex: 1;
        position: absolute;
        top: 0px;
        left: 0px;
        border: 1px solid ${theme.purple2};
        animation: grow 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1s;
    }
`

const Message = styled.p`
    color: ${theme.purple1};
    font-size: 1.3em;
    text-align: center;
    max-width: 200px;
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
        padding: 45px;
    }
`

const Probability = styled.p`
    font-size: 2em;
    font-weight: bold;
    color: ${theme.dark};
    @media screen and (min-width: 850px) {
       font-size: 4.5em;
    }
`

const Explanation = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    color: ${theme.dark};
    margin-bottom: 10px;
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
`

const Dial = ({
    condition,
    score 
}) => {

    let percentage = Math.floor(score*100)

    return (
        <div>
            <Container>
                <DialGraphic percentage={percentage}/>
                <TextHolder>
                    <Probability>{percentage}%</Probability>
                    <Explanation>Probability of trial success</Explanation>
                    <Improve>Improve your prediction</Improve>
                </TextHolder>
            </Container>
        </div>
    )

    if(condition === "thinking") return(
        <Container>
            <ThinkingOuterRing>
                <Message>Thinking...</Message>
            </ThinkingOuterRing>
        </Container>
    )
    return(
        <Container>
            <OuterRing>
                <Message>Answer some questions to get started</Message>
            </OuterRing>
        </Container>
    )
}

Dial.defaultProps = {
    condition: "initial"
}

export default Dial