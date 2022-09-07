import React, { memo } from 'react'

interface IProps {
    doSomething: () => void
}
const Memo = memo((props: IProps) => {
    console.log('受到父组件更新的影响')
    return (
        <>
            <h1>memo</h1>
            <button onClick={() => props.doSomething()}>调用父组件的方法, 不更新自己</button>
        </>
    )
})
export default Memo
