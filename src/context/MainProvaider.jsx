import { createContext, useState } from "react"

export const MainContext = createContext()

function MainProvaider({ children }) {
    const [basket, setbasket] = useState([])

    function addBasket(item) {
        setbasket([...basket, item])
    }
    return (
        <MainContext.Provider value={{ basket, addBasket, setbasket }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvaider