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
    border: 3px solid ${theme.background};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
`

const ThinkingOuter = styled(Outer)`
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
    /* box-shadow: 0px 0px 60px ${theme.brightBlue}; */
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
            <ThinkingOuter>
                <Message>Thinking...</Message>
            </ThinkingOuter>
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