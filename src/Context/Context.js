import { createContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    let VALUES = []

    const [names, setNames] = useState(VALUES)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [describe, setDescribe] = useState('')
    const [boxitems, setBoxitems] = useState([])
    const [address, setAddress] = useState('')

    const data = {
        names, setNames, name, setName, describe, price, describe, setPrice, setDescribe, boxitems, setBoxitems, address, setAddress
    }

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export default ThemeContext;