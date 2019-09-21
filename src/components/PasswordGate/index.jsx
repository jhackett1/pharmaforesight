import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"

// VERY INSECURE secure basic password check
// Stores password in PLAIN TEXT LOCAL STORAGE
// Password can be scraped from JS BUNDLE
// Don't use for anything needing PROPER SECURITY!!!

const PasswordGate = ({
    children
}) => {

    const checkPassword = () => window.localStorage.getItem("password") === process.env.REACT_APP_PASSWORD

    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(checkPassword())

    const handleSubmit = e => {
        e.preventDefault()
        if(password === process.env.REACT_APP_PASSWORD){
            window.localStorage.setItem("password", password)
            setLoggedIn(true)
        } else {
            setPassword("")
        }
    }

    if(!loggedIn) {
        return(
            <form onSubmit={handleSubmit}>
                <label htmlFor="password">Enter password</label>
                <input
                 type="password" 
                 name="password" 
                 value={password}
                 onChange={e => setPassword(e.target.value)}
                 required
                />
                <button>submit</button>
            </form>
        )
    }
    return children
}

export default PasswordGate