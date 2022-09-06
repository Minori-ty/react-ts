import React, { useContext } from 'react'
import { context } from './createContext'

export default function Context() {
    const { num, setNum } = useContext(context)
    return (
        <>
            <div>useContext{num}</div>
            <button onClick={() => setNum((count) => count + 1)}>use+1</button>
        </>
    )
}
