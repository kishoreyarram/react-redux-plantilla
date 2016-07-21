import initialState from './initialState';
import Immutable from 'immutable';
import {Question} from './stateDescriptor';

const LOAD_QUESTION_LIST = 'LOAD_QUESTION_LIST';

export default function reducer(state = initialState.get('questionList'), action) {
	switch (action.type) {
	case LOAD_QUESTION_LIST: {
		return state.set('questionList', new Immutable.List().push(action.questionList[0]));
	}
	default: return state;
	}
}

export function loadQuestions() {
	let question = new Question()
	.set('id', 1)
	.set('text', 'Why?');

	return {
		type: LOAD_QUESTION_LIST,
		questionList: [
			question		
		]
	};
}
