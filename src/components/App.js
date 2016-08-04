import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav, NavItem, Jumbotron, Button} from 'react-bootstrap';
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
				<Navbar inverse>
					<Navbar.Header>
						<Navbar.Brand>
						<a href="#">React-Bootstrap</a>
						</Navbar.Brand>
					<Navbar.Toggle />
					</Navbar.Header>
				</Navbar>
				<div className="container-fluid">
					{this.props.children}
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
