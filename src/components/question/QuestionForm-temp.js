import React from 'react';
import {Button} from 'react-bootstrap';

class QuestionForm extends React.Component {
	
	constructor(props, context) {
		super(props, context);
		
	}

	render() {
		return (
			<form>
				<Button onClick={this.props.saveQuestion}>{'Guardar'}</Button>
			</form>
		);
	}
}

export default QuestionForm;