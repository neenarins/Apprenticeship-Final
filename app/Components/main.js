var React = require('react');
var Router = require('react-router');

import Button from 'react-bootstrap/lib/Button';
//import FaBeer from 'react-icons/fa/beer'

var Landing = React.createClass({


	render: function(){

		return(			

			<div className="main-container">
				<div id="landing">
					
						<h1 className="text-center" id="logoText">
							APPRENTICE
						</h1>
						
						<h3 className="text-center" id="tagLine">
							DON'T GET LOST IN TECHSPACE
						</h3>

						<a href="#" className="btn btn-primary btn-large"><i className="icon-white icon-pencil"></i> Employer Signup</a>
						<a href="#" className="btn btn-primary btn-large"><i className="icon-white icon-pencil"></i> Employee Signup</a>

					</div>
			</div>
			)
		}	
});	


module.exports = Landing;