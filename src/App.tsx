import React, { useState } from 'react'
import State from './components/useState'
import Effect from './components/useEffect'
import Props from './components/props'
import Context from './components/contextFather'
import { Provider } from './components/createContext'
import Usecontext from './components/useContext'

export default function App() {
    const [num, setNum] = useState(0)

    return (
        <>
            <State />
            <Effect />
            <Props num={num} setNum={setNum} />
            <Provider value={{ num, setNum }}>
                <Context />
            </Provider>
            <Usecontext />
        </>
    )
}
