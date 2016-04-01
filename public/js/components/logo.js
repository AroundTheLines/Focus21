'use strict';
var React = require('react');

var Logo = React.createClass({
	render: function(){
		return (
			<img src="imgs/washington-department-of-health.svg" className="img-responsive img-responsive--center logo"/>
		);
	}
})

module.exports = Logo;