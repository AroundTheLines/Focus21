'use strict';
var React = require('react');

var Navbar = React.createClass({
	render: function(){
		return(
			<div className="container-fluid pull-right navbar">
				<a href="/"><img src="imgs/nav/help.svg"className="navbar__icon"/></a>
				<a href="/"><img src="imgs/nav/notifications.svg" className="navbar__icon"/></a>
				<a href="/"><img src="imgs/nav/apps.svg" className="navbar__icon"/></a>
				<a href="/"><img src="imgs/login/watcard.jpg" className="img-circle navbar__profile"/></a>
			</div>
		)
	}
});

module.exports = Navbar;