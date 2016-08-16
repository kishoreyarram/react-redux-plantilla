import React, {PropTypes} from 'react';
import {Radio} from 'react-bootstrap';

const Answer = ({id, answerText, checked, group, changeFunction}) => {
	return (
		<li>
			<Radio id={id} checked={checked} name={group} onChange={changeFunction}>
				{answerText}
			</Radio>
		</li>
	);
};

Answer.propTypes = {
	id: PropTypes.number.isRequired,
	answerText: PropTypes.string.isRequired,
	group: PropTypes.string.isRequired,
	changeFunction: PropTypes.func.isRequired,
	checked: PropTypes.bool
};

Answer.defaultProps = {
	checked: false
};

export default Answer;
