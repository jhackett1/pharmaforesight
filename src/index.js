import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import DataContextProvider from "./contexts/DataContext"

ReactDOM.render(
    <DataContextProvider>
        <App/>
    </DataContextProvider>, 
    document.getElementById("root")
)