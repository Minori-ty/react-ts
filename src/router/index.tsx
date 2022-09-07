import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About'
import User from '../pages/User'
import NotFound from '../pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const BaseRoute = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/about" element={<About />}></Route>
                <Route path="/user/:id" element={<User />}></Route>
            </Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
        </Routes>
    </BrowserRouter>
)

export default BaseRoute
