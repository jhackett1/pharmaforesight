import React from "react"
import styled from "styled-components"
import theme from "../_theme"

const Backing = styled.path`
    transition: 0.2s ease-out;
    stroke-width: ${props => props.condition === "finished" ? "2" : "0.75"};
`

const Inner = styled.path`
    stroke-linecap: round;
    stroke-width: 1.6;
    stroke-dasharray: ${props => props.percentage}, 100;
    animation: progress 2s cubic-bezier(0.165, 0.84, 0.44, 1);
    @keyframes progress {
        0% {
            stroke-dasharray: 0 100;
        }
    }
`

const DialGraphic = ({
    percentage,
    condition
}) =>
    <svg viewBox="0 0 36 36">
        <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#63DAC2"/>
                <stop offset="100%" stopColor="#2811EF"/>
            </linearGradient>
        </defs>
        <Backing
            condition={condition}
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={condition === "thinking" ? theme.brightGreen : theme.purple3}
        />

        {(condition === "finished" && percentage) &&
            <Inner
                percentage={percentage}
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="url(#linear)"
            />
        }


    </svg>


export default DialGraphic