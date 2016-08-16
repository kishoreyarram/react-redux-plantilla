import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import QuestionModule from './containers/QuestionContainer';
import QuestionForm from './components/question/QuestionForm';
import QuestionList from './components/question/QuestionList';


export default (
	<Route path="/" component={App}>
		<Route path="question" component={QuestionModule}>
			<IndexRoute component={QuestionList} />
			<Route path="new" component={QuestionForm} />
		</Route>
	</Route>
);
