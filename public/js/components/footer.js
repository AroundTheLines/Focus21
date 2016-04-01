'use strict'
import React from 'react'
import auth from '../auth'

var Footer = React.createClass({
	render(){
		return (
			<footer className="container footer">
				<p className="footer_text">© Scientific Technologies Corporation 2016</p>
			</footer>
		)
	}
})

module.exports = Footer;