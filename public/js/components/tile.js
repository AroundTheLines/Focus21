'use strict';
var React = require('react');

var Tile = React.createClass({
	render: function(){
		return(
			<div className="tile">
				<div className="tile__content">
					<div className="table">
						<div className="table-cell">
							<img src={this.props.img} className="tile__content__img-responsive"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Tile;