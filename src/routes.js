import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import QuestionModule from './containers/QuestionContainer';


export default (
	<Route path="/" component={App}>
		<Route path="new-question" component={QuestionModule} />
	</Route>
);
