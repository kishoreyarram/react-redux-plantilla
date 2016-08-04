import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import QuestionForm from './components/question';


export default (
	<Route path="/" component={App}>
		<Route path="new-question" component={QuestionForm} />
	</Route>
);
