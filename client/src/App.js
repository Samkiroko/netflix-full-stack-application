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
        <Route path='/register'>{!user ? <Register /> : <Redirect to='/' />}</Route>
        <Route path='/login'>{!user ? <Login /> : <Redirect to='/' />}</Route>
        {user && (
          <>
            <Route path='/movies'>
              <Home type='movie' />
            </Route>
            <Route path='/series'>
              <Home type='series' />
            </Route>
            <Route path='/watch'>
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  )
}

export default App
