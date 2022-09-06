import React, { Dispatch, SetStateAction } from 'react'

interface IProps {
    num: number
    setNum: Dispatch<SetStateAction<number>>
}

export default function props(props: IProps) {
    return (
        <>
            <h1>props</h1>
            <h2>{props.num}</h2>
            <button onClick={() => props.setNum((count) => count + 1)}>setNum</button>
        </>
    )
}
