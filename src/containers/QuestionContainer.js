import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {saveQuestion} from '../modules/questionModule';
import QuestionForm from '../components/question/QuestionForm';

class QuestionContainer extends React.Component {
	
	constructor(props, context) {
		super(props, context);
		this.state = {
			campo1: {value: '', validation: 'initial'}
		};
		
		this.saveQuestion = this.saveQuestion.bind(this);
	}

	saveQuestion(question) {
		
		this.props.saveQuestion(question);
	}

	
	render() {
		let components = this.props.children && React.cloneElement(this.props.children, {
			saveQuestion: this.saveQuestion
		});
		return (
			<div>
				{components}
			</div>
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
