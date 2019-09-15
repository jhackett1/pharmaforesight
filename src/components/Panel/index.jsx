import styled from "styled-components"
import theme from "../_theme"

const Panel = styled.section`
    background: ${theme.white};
    border-radius: 5px;
    color: ${theme.dark};
    margin-bottom: 25px;
    position: relative;
    z-index: 1;
    padding: 25px;
    box-shadow: 0px 2px 5px rgba(10,2,79,0.1);
    @media screen and (min-width: 850px) {
        padding: 50px;
    }
`

export default Panel

