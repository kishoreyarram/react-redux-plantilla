import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {loadQuestions} from '../modules/question/questionModule';
import Dots from './common/Dots';

class App extends React.Component {

	constructor(props, context) {
		super(props, context);   
	}

	componentDidMount() {
		this.props.loadQuestions();
	}
    
	render() {
		return (
			<div>
				<Navbar inverse>
					<Navbar.Header>
						<Navbar.Brand>
						<a href="#/question">
							{'React-Bootstrap'}
						</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} href="#/question/new">
								{'New Question'}
							</NavItem>
							<NavItem eventKey={2} href="#/candidate/new">
								{'New Candidate'}
							</NavItem> 
							
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<div className="container-fluid">
					{this.props.loading === true && (
						<Dots />
					)}
					{this.props.children}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object,
	loading: PropTypes.bool,
	questionList: PropTypes.object,
	loadQuestions: PropTypes.func
};

function mapStateToProps(state) {
	return {
		loading: state.ajaxModule > 0,
		questionList: state.questionModule.get('questionList')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loadQuestions: () => dispatch(loadQuestions())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
