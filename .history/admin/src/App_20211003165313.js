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
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const [userStats, setUserStats] = useState([])

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('/users/stats/', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTU4Zjk4MGE2MjJlMzU4ZjdlNTNmNiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzMyNjc4NDgsImV4cCI6MTYzMzY5OTg0OH0.3mQpS8ygEVsyKshy-DFdKGelFBonzwCNzZUy559CDL8',
          },
        })
        res.data.map((item) =>
          setUserStats((prev) => [...prev, { name: MONTHS[item._id - 1], 'New User': item.total }]),
        )
      } catch (err) {
        console.log(err)
      }
    }
    getStats()
  }, [])

  console.log(userStats)

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
