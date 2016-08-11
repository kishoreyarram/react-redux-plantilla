import React, {PropTypes} from 'react';
import {FormControl, FormGroup, Col, InputGroup, Button, Row} from 'react-bootstrap';
import Answer from '../answer/Answer';
import AnswerCapture from '../answer/AnswerCapture';
import Immutable from 'immutable';

class QuestionForm extends React.Component {
	
	constructor(props, context) {
		super(props, context);
		this.state = {
			answersList: new Immutable.List(),
			answerText: '',
			questionText: '',
			showAnswerCapture: false,
			selectedAnswer: 0
		}
		
		this.addAnswer = this.addAnswer.bind(this);
		this.changeTextQuestion = this.changeTextQuestion.bind(this);
		this.changeTextAnswer = this.changeTextAnswer.bind(this);
		this.closeAnswer = this.closeAnswer.bind(this);
		this.saveAnswer = this.saveAnswer.bind(this);
		this.changeAnswer = this.changeAnswer.bind(this);
		this.saveQuestion = this.saveQuestion.bind(this);
	}

	changeTextQuestion(event) {
		this.setState({
			questionText: event.target.value
		})
	}
	
	changeTextAnswer(event) {
		this.setState({
			answerText: event.target.value
		})
	}
	
	addAnswer(event) {
		event.preventDefault();
		this.setState({
			showAnswerCapture: true
		})
	}
	
	saveAnswer(even) {
		event.preventDefault();
		let newAnser = {},
			answersList = this.state.answersList;
		newAnser.text = this.state.answerText;
		newAnser.checked = true;
		newAnser.nameGroup = 'pregunta';
		answersList = answersList.push(newAnser);
		this.setState({
			showAnswerCapture: false,
			answerText: '',
			answersList
		});
	}
	
	closeAnswer(event) {
		event.preventDefault();
		this.setState({
			showAnswerCapture: false
		})
	}
	
	changeAnswer(event) {
		this.setState({
			selectedAnswer: parseInt(event.target.id)
		});
	}
	
	saveQuestion(event) {
		event.preventDefault();
		let contentPregunta,
			answers = [];
		
		_.each(this.state.answersList.toArray(), (element, index) => {
			let answer = {};
			answer.id = index;
			answer.text = element.text;
			answers.push(answer);
		});
		
		contentPregunta = {
			questionText: this.state.questionText,
			correctAnswer: this.state.selectedAnswer,
			answers
		}
		
		this.props.saveQuestion(contentPregunta);
	}
	
	render() {
		let showAnswers = this.state.answersList.toArray().map(((element, index) => {
			console.log(this.state.selectedAnswer)
			return (
				<div key={index}>
					<Answer id={index}
						answerText={element.text} 
						checked={index === this.state.selectedAnswer} 
						changeFunction={this.changeAnswer}
						group={element.nameGroup}
						/>
				</div>
			)
		}).bind(this));
		return (
			<form onSubmit={this.saveQuestion}>
				<AnswerCapture 
					text={this.state.answerText} 
					changeFunction={this.changeTextAnswer} 
					show={this.state.showAnswerCapture}
					closeFunction={this.closeAnswer}
					saveAnswer={this.saveAnswer} />
				<Row>
					<Col xs={8}>
						<FormGroup>
							<InputGroup>
								<FormControl type="text" 
									onChange={this.changeTextQuestion} 
									value={this.state.questionText} />
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
				<Row>
					<Col xs={8}>
						&nbsp;
					</Col>
					<Col xs={4}>
						<Button type="submit" >
							{'Guardar'}
						</Button>
					</Col>
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
