import React, {PropTypes} from 'react';
import {Table} from 'react-bootstrap';
import QuestionRow from './QuestionTableRow';

const QuestionList = ({questionsList}) => {
	let questions = questionsList.map((element, index) => {
		let propiedades = element.toJSON();
		return (
			<QuestionRow key={index} {...propiedades} />
		);
	});
	return (
		<Table striped bordered condensed hover>
			<thead>
				<tr>
					<th>{'#'}</th>
					<th>{'Text'}</th>
					<th>{'Answers Number'}</th>
				</tr>
			</thead>
			<tbody>
				{questions}
			</tbody>	
		</Table>
	);
};

QuestionList.propTypes = {
	questionsList: PropTypes.array
};

export default QuestionList;
