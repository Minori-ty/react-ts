import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Auth({ children }: IProps) {
  let token = '123'
  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to="/" replace></Navigate>
  }
}

interface IProps {
  children: JSX.Element
}
