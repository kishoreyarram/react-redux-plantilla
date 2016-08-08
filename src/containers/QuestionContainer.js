import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {saveQuestion} from '../modules/questionModule';
import QuestionForm from '../components/question/QuestionForm-temp';

class QuestionContainer extends React.Component {
	
	constructor(props, context) {
		super(props, context);
		this.state = {
			campo1: {value: '', validation: 'initial'}
		};
		
		this.saveQuestion = this.saveQuestion.bind(this);
	}

	saveQuestion(event) {
		event.preventDefault();
		let contentPregunta  = { "questionText":"Why Gerard 3?",
				"answers": [{"id": 1, "text": "Just Because"}, {"id": 1, "text":"Why not"}],
				"correctAnswer": 1
			};
		this.props.saveQuestion(contentPregunta);
	}

	
	render() {
		return (
			<QuestionForm saveQuestion={this.saveQuestion} />
		);
	}
}

QuestionContainer.propTypes = {
	
};

QuestionContainer.defaultProps = {
	
};

function mapStateToProps(state) {
	return {
		
	};
}

function mapDispatchToProps(dispatch) {
	return {
		saveQuestion: (question) => {dispatch(saveQuestion(question))}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
