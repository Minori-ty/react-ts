import { NavLink } from 'react-router-dom'

export default function User() {
  return (
    <>
      <h1>users</h1>
      <ul>
        <li>
          <NavLink to={'/user/1'}>用户1</NavLink>
        </li>
        <li>
          <NavLink to="/user/2">用户2</NavLink>
        </li>
        <li>
          <NavLink to="/user/3">用户3</NavLink>
        </li>
        <li>
          <NavLink to="/user/4">用户4</NavLink>
        </li>
        <li>
          <NavLink to="/user/5">用户5</NavLink>
        </li>
      </ul>
    </>
  )
}
