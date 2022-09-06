import React, { Dispatch, SetStateAction } from 'react'
import { Consumer } from './createContext'

export default function contextSon() {
    return (
        <>
            <Consumer>
                {({ num, setNum }) => {
                    return (
                        <>
                            <h2>context{num}</h2>
                            <button onClick={() => setNum((count) => count + 1)}>context +1</button>
                        </>
                    )
                }}
            </Consumer>
        </>
    )
}
