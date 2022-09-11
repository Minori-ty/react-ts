import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About'
import User from '../pages/User'
import NotFound from '../pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from '@/utils/Auth'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { history } from '../router/history'

const BaseRoute = () => (
  <HistoryRouter history={history}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user/:id" element={<User />}></Route>
      </Route>
      <Route
        path="/home"
        element={
          <Auth>
            <Home />
          </Auth>
        }></Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  </HistoryRouter>
)

export default BaseRoute
