import React, { useState } from "react"
import Layout from "./Layout"
import styled from "styled-components"
import Dial from "./Dial"
import Panel from "./Panel"
import Form from "./Form"

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

const App = () => {
  const [condition, setCondition] = useState("thinking")

  return(
    <Layout>
      <Columns>
        <div>
          <Panel>
            <Form/>
          </Panel>
        </div>
        <Dial condition={condition}/>
      </Columns>
    </Layout>
  )
}


export default App