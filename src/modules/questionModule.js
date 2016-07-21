import initialState from './initialState';
import Immutable from 'immutable';
import {Question} from './stateDescriptor';

const LOAD_QUESTION_LIST = 'LOAD_QUESTION_LIST';

export default function reducer(state = initialState.get('questionModule'), action) {
	debugger;
	switch (action.type) {
	case LOAD_QUESTION_LIST: {
		let questionList = state.get('questionList');
		return state.set('questionList', questionList.push(action.questionList[0]));
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
