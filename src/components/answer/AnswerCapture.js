import React, {PropTypes} from 'react';
import {Modal, Button, FormGroup, InputGroup, FormControl} from 'react-bootstrap';

const AnswerCapture = ({text, changeFunction, show, closeFunction, saveAnswer}) => {
	return (
		<Modal show={show}>
			<Modal.Header>
				<Modal.Title>Nueva Pregunta</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<FormGroup>
					<InputGroup>
						<FormControl type="text" 
							onChange={changeFunction} 
							value={text} />
					</InputGroup>
				</FormGroup>
			</Modal.Body>

			<Modal.Footer>
				<Button onClick={closeFunction}>Close</Button>
				<Button bsStyle="primary" onClick={saveAnswer}>Save changes</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AnswerCapture;

