// this component is what is mapped to after the employee searches

var React = require('react');
var helpers = require("../../utils/helpers.js");
var Router = require('react-router');

import Modal from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Radio from 'react-bootstrap/lib/Radio';
import Button from 'react-bootstrap/lib/Button';

var EmployeeResults = React.createClass({

	getInitialState: function(){
		
		return {
			employeeID:this.props.user,
			jobID:this.props.data.jobID,
			showModal:false,
			title:this.props.data.title,
			description:this.props.data.description,
			jobLocation:this.props.data.jobLocation,
			postingLink:this.props.data.postingLink,
			startingSalary:this.props.data.startingSalary,
			finalSalary:this.props.data.finalSalary,
			zipcode:this.props.data.zipcode,
			keywords:[]
		




		}
 	},

 	 	 close() {
    this.setState({ showModal: false });
  
   },

  open() {
    // on modal open, keywords are queried
  	 var obj={jobID:this.state.jobID}

  	 helpers.retrieveKeywords(obj).then(function(result){
  	 	console.log(result.result.data[0].keywordsEmployers)
  	 	
  	 	var array = [];
  	 	

 	 	for(var i=0 ; i < result.result.data[0].keywordsEmployers.length ; i++){
  	 		console.log(result.result.data[0].keywordsEmployers[i].keywords)
			array.push(result.result.data[0].keywordsEmployers[i].keywords)
		  }
	 	this.setState({keywords:array,
	 					showModal:true

	 	})
		
  	 		
   	 }.bind(this))


  },
 	
 	// saves article to database
 	saveJobReact:function(){

 		helpers.saveJob2(this.state.employeeID,this.state.jobID)

 	},



	render:function(){

		return(

			<div>
			 <li className="list-group-item">
						
				<h3>
				  	<span><em>{this.props.data.title}</em></span>
					<span className="btn-group pull-right" >
						<p>{this.props.data.description}</p>
						<a href="#" target="_blank" className="btn btn-primary"  type="submit" role="button">View Article</a>
						
						<Button onClick={this.saveJobReact}>Save</Button>
						<Button onClick={this.open}>Modal</Button>
					</span> 
				</h3>
				
				
			</li> 
		
			<Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            
            <p>{this.state.description}</p>
            <p>{this.state.keywords[0]}</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

        </div>

		)

}
});

module.exports = EmployeeResults;