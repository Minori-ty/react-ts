import React, { useState, useCallback, useMemo } from 'react'
import State from '../components/useState'
import Effect from '../components/useEffect'
import Props from '../components/props'
import Context from '../components/contextFather'
import { Provider } from '../components/createContext'
import Usecontext from '../components/useContext'
import Input from '../components/input'
import Memo from '../components/mono'
import Redux from '../components/redux'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'

export default function App() {
  const [num, setNum] = useState(0)
  // const doSomething = useCallback(() => setNum((num) => num + 1), [])
  const doSomething = useMemo(() => {
    return () => setNum((num) => num + 1)
  }, [])
  const location = useLocation()
  console.log(location.pathname)
  const push = useNavigate()
  function ToHome() {
    push('/home', {
      state: {
        name: 'asfaf',
      },
    })
  }
  function ToAbout() {
    push('/about')
  }
  function ToUser() {
    push('/user/123')
  }

  return (
    <>
      <Outlet />
      <button
        onClick={ToHome}
        className="rounded-lg  bg-blue-500 p-2 text-white">
        home
      </button>
      <button onClick={ToAbout}>about</button>
      <button onClick={ToUser}>user</button>
      <h1>{num}</h1>
      <button onClick={() => setNum((num) => num + 1)}>更新父组件视图</button>
      <State />
      <Effect />
      <Props num={num} setNum={setNum} />
      <Provider value={{ num, setNum }}>
        <Context />
      </Provider>
      <Usecontext />
      <Input />
      <Memo doSomething={doSomething} />
      {/* @ts-ignore */}
      <Redux />
    </>
  )
}
