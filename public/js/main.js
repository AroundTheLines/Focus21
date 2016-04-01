import React from 'react'
//import cookie from 'react-cookie'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, IndexRedirect, Location } from 'react-router'
import Navbar from './components/navbar'
import Logo from './components/logo'
import LoginSession from './components/loginSession'
import Dashboard from './components/dashboard'
import Footer from './components/footer'
import auth from './auth'

const App = React.createClass({
  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  },

  render() {
    return (
      <div>
        <div>
          {(this.props.location.pathname === "/dashboard") ? (
            <Navbar />
          ) : (
            <nav></nav>
          )}
          <br />
          <Logo />
          <p>{this.state.loggedIn}</p>
          {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
        </div>
        <Footer />
      </div>
    )
  }
})



const Logout = React.createClass({
  componentDidMount() {
    auth.logout()
  },

  render() {
    return <p>You are now logged out</p>
  }
})

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/login" />
      <Route path="login" component={LoginSession} />
      <Route path="logout" component={Logout} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    </Route>
  </Router>
), document.getElementById('example'));
