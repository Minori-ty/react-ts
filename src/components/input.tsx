import React, { MutableRefObject, RefObject, useRef, useState } from 'react'

//受控组件和非受控组件只存在于表单元素
export default function ref() {
    const [value, setValue] = useState('')
    const element = useRef<HTMLInputElement>(null)
    console.log('受到父组件更新视图的影响, 被迫更新组件')

    return (
        <>
            <h1>受控组件</h1>
            <input type="text" name="" id="" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => alert(value)}>获取value的值</button>
            <h1>非受控组件</h1>
            <input type="text" name="" id="" ref={element} />
            <button onClick={() => alert(element.current?.value)}>获取value的值</button>
        </>
    )
}
