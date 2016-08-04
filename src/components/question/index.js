import React, {PropTypes} from 'react';
import {FormControl, FormGroup, Col, InputGroup, Button} from 'react-bootstrap';

class QuestionForm extends React.Component {
	
	constructor(props, context) {
		super(props, context);
	}
	
	render() {
		return (
			<form>
				<FormGroup>
					<Col xs={8}>
						<InputGroup>
							<FormControl type="text" />
						</InputGroup>
					</Col>
					<Col xs={4}>
						<Button>
							{'Guardar'}
						</Button>
					</Col>
				</FormGroup>
			</form>
		);
	}
}

QuestionForm.propTypes = {
	
};

QuestionForm.defaultProps = {
	
};

export default QuestionForm;
