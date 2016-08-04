import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Jumbotron, Button} from 'react-bootstrap';
import {addQuestion} from '../modules/questionModule';

class App extends React.Component {
    constructor(props, context){
        super(props, context);   

		this.addQuestion = this.addQuestion.bind(this);
    }

	addQuestion() {
		this.props.addQuestion();
	}
    
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	questionList: PropTypes.object,
	addQuestion: PropTypes.func
};

function mapStateToProps(state) {
	return {
		questionList: state.questionModule.get('questionList')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addQuestion: () => dispatch(addQuestion())
	};
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
