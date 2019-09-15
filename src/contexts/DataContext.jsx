import React, { useState, createContext } from "react"

export const DataContext = createContext()

const DataContextProvider = ({
    children
}) => {

    const [condition, setCondition] = useState("initial")
    const [score, setScore] = useState(null)
    
    return(
        <DataContext.Provider value={{
            condition,
            score,
            setCondition,
            setScore
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider