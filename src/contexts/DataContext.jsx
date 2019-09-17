import React, { useState, createContext } from "react"

export const DataContext = createContext()

const DataContextProvider = ({
    children
}) => {

    const [condition, setCondition] = useState("initial")
    const [score, setScore] = useState(null)
    const [improved, setImproved] = useState(false)
    
    return(
        <DataContext.Provider value={{
            condition,
            score,
            improved,
            setCondition,
            setScore,
            setImproved
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider