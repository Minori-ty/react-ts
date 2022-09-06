import { createContext, Dispatch, SetStateAction } from 'react'

interface IContext {
    num: number
    setNum: Dispatch<SetStateAction<number>>
}

const context = createContext<IContext>({} as IContext)
const { Provider, Consumer } = context

export { Provider, Consumer, context }
