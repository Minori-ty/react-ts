import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Home() {
    const [searchParams] = useSearchParams()
    return <div>Home--{searchParams.getAll('name')[0]}</div>
}
