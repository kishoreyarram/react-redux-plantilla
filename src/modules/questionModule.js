import initialState from './initialState';
import Immutable from 'immutable';
import {Question} from './stateDescriptor';
import questionApi from '../api/questions';

const LOAD_QUESTION_LIST = 'LOAD_QUESTION_LIST';
const SAVE_QUESTION_SUCCESS = 'SAVE_QUESTION_SUCCESS';
const ADD_QUESTION = 'ADD_QUESTION';

export default function reducer(state = initialState.get('questionModule'), action) {
	switch (action.type) {
	case LOAD_QUESTION_LIST: {
		let questionList = state.get('questionList');
		return state.set('questionList', questionList.push(action.questionList[0]));
	}
	case ADD_QUESTION: {
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

export function addQuestion() {
	let question = new Question()
	.set('id', 2)
	.set('text', 'Why the rito?');

	return {
		type: ADD_QUESTION,
		questionList: [
			question		
		]
	};
}

export const saveQuestion = (question) => {
	return (dispatch) => {
		return questionApi.saveQuestion(question).then(response => {
			dispatch({type: SAVE_QUESTION_SUCCESS, result: response.data});
		}).catch(error => {
			dispatch(ajaxCallError(error));
			throw (error);
		});
	};
};
