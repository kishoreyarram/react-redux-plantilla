import React, {PropTypes} from 'react';
import {FormControl, FormGroup, Col, InputGroup, Button, Row} from 'react-bootstrap';
import Answer from '../answer/Answer';
import Immutable from 'immutable';

class QuestionForm extends React.Component {
	
	constructor(props, context) {
		super(props, context);
		this.state = {
			answersList: new Immutable.List()
		}
		
		this.addAnswer = this.addAnswer.bind(this);
	}
	
	addAnswer(event) {
		event.preventDefault();
		let newAnser = {},
			answersList = this.state.answersList;
		newAnser.text = 'Hola';
		newAnser.checked = true;
		newAnser.nameGroup = 'pregunta';
		answersList = answersList.push(newAnser);
		this.setState({answersList});
	}
	
	render() {
		let showAnswers = this.state.answersList.toArray().map((element, index) => {
			return (
				<Answer key={index} id={index}
					answerText={element.text} 
					checked={element.checked} 
					group={element.nameGroup} />
			)
		});
		return (
			<form>
				<Row>
					<Col xs={8}>
						<FormGroup>
							<InputGroup>
								<FormControl type="text" />
							</InputGroup>
						</FormGroup>
					</Col>
					<Col xs={4}>
						<Button onClick={this.addAnswer}>
							{'Agregar Respuesta'}
						</Button>
					</Col>	
				</Row>
				<Row>
					{showAnswers}
				</Row>
			</form>
		);
	}
}

QuestionForm.propTypes = {
	
};

QuestionForm.defaultProps = {
	
};

export default QuestionForm;
