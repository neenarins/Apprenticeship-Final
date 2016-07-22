var React = require('react');
var Router = require('react-router');



var Navbar = React.createClass({



	render: function() {


		return(

			<div className="main-container">
				<nav className="navbar navbar-inverse navbar-fixed-top" id="navBar">
				  <div className="container-fluid">
				    <ul className="nav navbar-nav navbar-right">
				      <li><a href="#">Home</a></li>
				      <li><a href="#/jobs">Jobs</a></li>
				      <li><a href="#/postjob">Jobs Postings</a></li>
				      <li><a href="#/employer">Employers</a></li> 
				      <li><a href="#/employee">Employees</a></li> 
				      <li><a href="#/jobs">jobs</a></li> 
				    <li><a href="#/employerprofile">employer profile</a></li>
				     <li><a href="#/savedjobs">saved jobs</a></li> 
				    
				    </ul>
				  </div>
				</nav>

				{this.props.children}

			</div>

		)
	}
})

module.exports = Navbar;