import React, { PropTypes } from 'react';
import {Radio} from 'react-bootstrap';

const Answer = ({answerText, checked, group}) => {
	return (
		<li>
			<Radio checked={checked} name={group}>
			  {answerText}
			</Radio>
		</li>
	);
};

Answer.displayName = 'Answer';

Answer.propTypes = {
	answerText: PropTypes.string.isRequired,
	group: PropTypes.string.isRequired,
	checked: PropTypes.bool
};

Answer.defaultProps = {
	checked: false
};

export default Answer;

