import Immutable from 'immutable';

let initialState = new Immutable.Map();

initialState = initialState.set('questionModule', new Immutable.Map().set('questionList', new Immutable.List()));

export default initialState;
