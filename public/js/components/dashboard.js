'use strict'
var React = require('react');

var Tile = require('./tile.js');

var Dashboard = React.createClass({
	render: function(){
		return(
			<div className="container apps">
				<Tile img="imgs/apps/1-1.svg"/>
				<Tile img="imgs/apps/1-2.svg"/>
				<Tile img="imgs/apps/1-2.svg"/>
				<Tile img="imgs/apps/1-1.svg"/>
				<Tile img="imgs/apps/1-2.svg"/>
				<Tile img="imgs/apps/1-2.svg"/>
				<Tile img="imgs/apps/1-1.svg"/>
				<Tile img="imgs/apps/1-2.svg"/>
				<Tile img="imgs/apps/1-2.svg"/>
			</div>
		)
	}
});

module.exports = Dashboard;