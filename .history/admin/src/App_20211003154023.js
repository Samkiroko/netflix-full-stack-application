import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import './app.css'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'
import { useState } from 'react'

function App() {
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const [userStats, setUserStats] = useState([])
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/users' exact>
            <UserList />
          </Route>
          <Route path='/user/:userId' exact>
            <User />
          </Route>
          <Route path='/newUser' exact>
            <NewUser />
          </Route>
          <Route path='/products' exact>
            <ProductList />
          </Route>{' '}
          <Route path='/product/:productsId' exact>
            <Product />
          </Route>{' '}
          <Route path='/newproduct' exact>
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
