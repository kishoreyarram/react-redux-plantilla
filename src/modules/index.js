import {combineReducers} from 'redux';
import ajaxModule from './ajaxModule';
import questionModule from './questionModule';
import candidateModule from './candidateModule';

const rootReducer = combineReducers({
	ajaxModule, 
	questionModule,
	candidateModule
});

export default rootReducer;
