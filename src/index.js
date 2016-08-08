import '../less/main.less';
import _ from 'underscore';

import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import {Provider} from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

window._ = _;

const store = configureStore();
/*
store.dispatch(loadQuestions());

store.dispatch(saveQuestion(
{ "questionText":"Why Gerard 3?",
    "answers": [{"id": 1, "text":"Just Because"}, {"id": 1, "text":"Why not"}],
    "correctAnswer": 1
}
));
*/


render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);


/*

-  Para guardar en el store debe ser inmmutable
-  Cuando le den click a agregar respuesta, debe solicitar el texto de la respuesta
-  Permitir que cambie el valor del radio
-  Id debe ser dinámico

*/