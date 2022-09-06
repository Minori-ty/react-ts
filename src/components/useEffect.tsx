import React, { useEffect } from 'react'

export default function Effect() {
    // 不想检测数据的更新的时候，用空数组
    useEffect(() => {
        console.log('mounted, 数据请求')
        return () => {
            console.log('组件销毁')
        }
    }, [])

    return (
        <>
            <h1>useEffect</h1>
        </>
    )
}
