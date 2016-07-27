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
				<div className="wrapGeneral">
					{'pregunta: ' + this.props.questionList.get(0).get('text')}
					<Button bsStyle="warning" onClick={this.addQuestion}>{'Hola'}</Button>

					<Jumbotron>
						<h1>Hello, world!</h1>
						<p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
						<p><Button bsStyle="primary">Learn more</Button></p>
					</Jumbotron>
				</div>
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
