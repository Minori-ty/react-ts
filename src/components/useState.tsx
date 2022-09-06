import React, { useState } from 'react'

export default function State() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>useState</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount((count) => count + 1)}>+1</button>
        </>
    )
}
