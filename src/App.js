import React from "react"
import Layout from "./Layout"
import styled from "styled-components"
import Dial from "./Dial"

const Columns = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 25px;
  @media screen and (min-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 60px;
  }
`

const App = () =>
  <Layout>
    <Columns>
      <h1>App</h1>
      <Dial/>
    </Columns>
  </Layout>

export default App