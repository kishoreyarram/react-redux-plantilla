import Immutable from 'immutable';

let initialState = new Immutable.Map()
.set('questionModule', 
	new Immutable.Map().set('questionsList', new Immutable.List())
)
.set('candidateModule',
	new Immutable.Map().set('candidatesList', new Immutable.List())
)
.set('ajaxCalls', 0);

export default initialState;
