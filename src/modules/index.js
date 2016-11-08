import {combineReducers} from 'redux';
import ajaxModule from './ajax/ajaxModule';
import questionModule from './question/questionModule';
import candidateModule from './candidate/candidateModule';

const rootReducer = combineReducers({
	ajaxModule, 
	questionModule,
	candidateModule
});

export default rootReducer;
