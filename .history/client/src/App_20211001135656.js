import './App.scss'
import Home from './components/pages/home/Home'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import Watch from './components/pages/watch/Watch'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'></Route>
        <Home />
      </Switch>

      {/* <Register /> */}
      {/* <Login /> */}
    </Router>
  )
}

export default App
