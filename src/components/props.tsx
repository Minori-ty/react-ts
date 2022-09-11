import React, { Dispatch, SetStateAction } from 'react'
import request from '../api/axios'

interface IProps {
  num: number
  setNum: Dispatch<SetStateAction<number>>
}

export default function props(props: IProps) {
  function fetchData() {
    request.get('/users')
  }
  return (
    <>
      <h1>props</h1>
      <h2>{props.num}</h2>
      <button onClick={() => props.setNum((count) => count + 1)}>setNum</button>
      <br />
      <button onClick={fetchData}>fetchData</button>
    </>
  )
}
