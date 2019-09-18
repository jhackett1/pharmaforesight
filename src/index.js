import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import DataContextProvider from "./contexts/DataContext"
import PasswordGate from "./components/PasswordGate"

ReactDOM.render(
    <DataContextProvider>
        {/* <PasswordGate> */}
            <App/>
        {/* </PasswordGate> */}
    </DataContextProvider>, 
    document.getElementById("root")
)