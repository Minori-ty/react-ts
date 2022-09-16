import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu } from 'antd'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
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

const { Header, Content, Sider } = Layout

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: [
      {
        key: '1',
        label: '是',
      },
    ],
  }
})

const menu: MenuProps['items'] = [
  {
    key: 'nav 1',
    icon: React.createElement(UserOutlined),
    label: 'nav 1',
    children: [
      {
        key: '1',
        label: <Link to="/">首页</Link>,
      },
      {
        key: '2',
        label: <Link to="/user">用户</Link>,
      },
    ],
  },
]

function App() {
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
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={menu}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}>
            <Outlet />
            <button
              onClick={ToHome}
              className="rounded-lg  bg-blue-500 p-2 text-white">
              home
            </button>
            <button onClick={ToAbout}>about</button>
            <button onClick={ToUser}>user</button>
            <h1>{num}</h1>
            <button onClick={() => setNum((num) => num + 1)}>
              更新父组件视图
            </button>
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
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
