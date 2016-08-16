import {combineReducers} from 'redux';
import ajaxModule from './ajaxModule';
import questionModule from './questionModule';

const rootReducer = combineReducers({
	ajaxModule,
	questionModule
});

export default rootReducer;
