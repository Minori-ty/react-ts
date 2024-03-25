import About from '../pages/About'
import NotFound from '../pages/NotFound'
import { RouteObject } from 'react-router-dom'
import Auth from '@/utils/Auth'
import { lazy, ReactNode, Suspense } from 'react'
import { Spin } from 'antd'
import Layout from '../layout'

// const BaseRoute = () => (
//   <HistoryRouter history={history}>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="/about" element={<About />}></Route>
//         <Route path="/user/:id" element={<User />}></Route>
//       </Route>
//       <Route
//         path="/home"
//         element={
//           <Auth>
//             <Home />
//           </Auth>
//         }></Route>
//       <Route path="/*" element={<NotFound />}></Route>
//     </Routes>
//   </HistoryRouter>
// )

// export default BaseRoute

const Home = lazy(() => import('../pages/Home'))
// const Login = lazy(() => import('../pages/Login'))
const User = lazy(() => import('../pages/User'))
const UserDetail = lazy(() => import('../pages/userDetail'))

function lazyLoad(children: ReactNode): ReactNode {
  return <Suspense fallback={<Spin />}>{children}</Suspense>
}

const router: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: lazyLoad(<About />),
      },
      {
        path: '/user',
        element: lazyLoad(<User />),
      },
      {
        path: '/user/:id',
        element: lazyLoad(<UserDetail />),
      },
    ],
  },
  {
    path: '/home',
    element: lazyLoad(
      <Auth>
        <Home />
      </Auth>
    ),
  },
  {
    path: '/*',
    element: lazyLoad(<NotFound />),
  },
]

export default router
