import '../less/main.less';
import _ from 'underscore';

import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import configureStore from './store';
import {loadQuestions, saveQuestion} from './modules/questionModule';
import {Provider} from 'react-redux';
//import {initConsulta} from './actions/consultaMedicaActions';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

window._ = _;

const store = configureStore();

store.dispatch(loadQuestions());

store.dispatch(saveQuestion(
{ "questionText":"Why Gerard 3?",
    "answers": [{"id": 1, "text":"Just Because"}, {"id": 1, "text":"Why not"}],
    "correctAnswer": 1
}
));

/*

render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);
*/