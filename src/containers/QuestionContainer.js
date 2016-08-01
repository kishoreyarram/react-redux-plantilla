import React, {PropTypes} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class QuestionContainer extends React.Component {
	
	constructor(props, context) {
		super(props, context);
		this.state = {
			campo1: {value: '', validation: 'initial'}
		};
		
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event) {
		let cosa = this.state,
			newValue = event.target.value;
		cosa.campo1.value = newValue;
		if (newValue.length > 10) cosa.campo1.validation = 'success';
		else if (newValue.length > 5) cosa.campo1.validation = 'warning';
		else if (newValue.length > 0) cosa.campo1.validation = 'error';
		else cosa.campo1.validation = 'initial'
		this.setState(cosa);
	}
	
	render() {
		return (
			<form>
				<FormGroup
				  controlId="formBasicText"
				  validationState={this.state.campo1.validation} >
				  <ControlLabel>Working example with validation</ControlLabel>
				  <FormControl
					type="text"
					value={this.state.campo1.value}
					placeholder="Enter text"
					onChange={this.handleChange}
				  />
				  <FormControl.Feedback />
					{ (this.state.campo1.validation === 'error' || 
						this.state.campo1.validation === 'warning') &&
						(
							<HelpBlock>Validation is based on string length.</HelpBlock>
						)
					}
				</FormGroup>
			</form>
		);
	}
}

QuestionContainer.propTypes = {
	
};

QuestionContainer.defaultProps = {
	
};

export default QuestionContainer;
