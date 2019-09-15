import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
    position: sticky;
    top: 0px;
`

const Backing = styled.path`
  stroke-width: 2;
`

const Inner = styled.path`
    stroke-linecap: round;
    stroke-width: 1.6;
    stroke-dasharray: 88, 100;
    animation: progress 2s cubic-bezier(0.165, 0.84, 0.44, 1);
    @keyframes progress {
        0% {
            stroke-dasharray: 0 100;
        }
    }
`

const DialGraphic = () =>
    <Svg viewBox="0 0 36 36">
        <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stop-color="#63DAC2"/>
                <stop offset="100%" stop-color="#2811EF"/>
            </linearGradient>
        </defs>
        <Backing
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#D6D4E4"
        />

        <Inner
            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="url(#linear)"
        />
    </Svg>


export default DialGraphic