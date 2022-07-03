import { Routes, Route } from 'react-router-dom'
import Layout from './routes/layout/Layout'
import Home from './routes/home/Home'
import Shop from './routes/shop/Shop'
import SignIn from './routes/sign-in/SignIn'

const App = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='sign-in' element={<SignIn />} />
    </Route>
  </Routes>
)

export default App
