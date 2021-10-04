import './App.scss'
import Home from './components/pages/home/Home'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import Watch from './components/pages/watch/Watch'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  const user = false
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {user ? <Home /> : <Redirect to='/register' />}
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/movies'>
          <Home type='movies' />
        </Route>
        <Route path='/series'>
          <Home type='series' />
        </Route>
        <Route path='/watch'>
          <Watch />
        </Route>
      </Switch>

      {/* <Register /> */}
      {/* <Login /> */}
    </Router>
  )
}

export default App
