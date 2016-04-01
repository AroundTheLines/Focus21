import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TinyTiles from './tinyTiles'
import auth from '../auth'


var LoginSession = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState() {
		return {
			error: false,
			loggedIn: auth.loggedIn()
		}
	},

	handleSubmit(event) {
		event.preventDefault()

		const email = "joe@example.com"
		const pass = this.refs.password.value

		auth.login(email, pass, (loggedIn) => {
			if (!loggedIn){
				return this.setState({ error: true })
			}else{
				const { location } = this.props;

				if (location.state && location.state.nextPathname) {
					this.context.router.replace(location.state.nextPathname)
				} else {
					this.context.router.replace('/dashboard')
				}
			}
		})
 	},

	render(){
		console.log(this.state.loggedIn);
		return (
			<form onSubmit={this.handleSubmit} className="container login">
				{this.state.loggedIn ? (
				<div>
 					<img src="imgs/login/watcard.jpg" className="login__profile-picture img-circle"/>
					<h3 className="login__profile-name">Qile Wang</h3>
					<p className="login__profile-email">Qile@aroundthelines.com</p>
				</div>
 				) : (
				<div className="input-group login__input login__input--email">
					<span className="login__input__icon input-group-addon" id="sizing-addon1" htmlFor="email"><img src="imgs/login/group-2.svg" className="login__input__icon__image"/></span>
					<input required name="email" ref="email" type="email" placeholder="EMAIL" className="form-control login__input__field" aria-describedby="sizing-addon1"/>
				</div>
				)}

				<div className="input-group login__input">
					<span className="login__input__icon input-group-addon" id="sizing-addon2" htmlFor="email"><img src="imgs/login/group.svg" className="login__input__icon__image"/></span>
					<input required name="password" ref="password" type="password" placeholder="PASSWORD" className="form-control login__input__field" aria-describedby="sizing-addon2"/>
				</div>

				<div className="form-group" className="login__submit">
                	<button className="btn btn-primary login__submit__button" type="submit">SIGN IN</button>
                	<br />
                	<a href="#" className="login__submit__help">Need help?</a>
              	</div>
              	{this.state.loggedIn ?(
		        	<TinyTiles />
		        ) : (
		        	<div></div>
		        )}
			</form>
		)
	}
});

module.exports = LoginSession;