import Immutable from 'immutable';

export const Question = new Immutable.Record({
	id: undefined,
	text: '',
	answers: new Immutable.List(),
	rigthAnswer: undefined
});

export const Answer = new Immutable.Record({
	id: undefined,
	text: ''
});
