import Immutable from 'immutable';

let initialState = new Immutable.Map(); 

initialState = initialState.set('questionList', new Immutable.List());

export default initialState;
