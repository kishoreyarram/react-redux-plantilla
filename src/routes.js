import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import QuestionModule from './containers/QuestionContainer';
import QuestionForm from './components/question/QuestionForm';
import QuestionList from './components/question/QuestionList';
 
import CandidateModule from './containers/CandidateContainer';
import CandidateForm from './components/candidate/CandidateForm';
import CandidateList from './components/candidate/CandidateList';


export default (
	<Route path="/" component={App}> 
		<Route path="question" component={QuestionModule}>
			<IndexRoute component={QuestionList} />
			<Route path="new" component={QuestionForm} />
		</Route> 
		<Route path="candidate" component={CandidateModule}>
			<IndexRoute component={CandidateList} />
			<Route path="new" component={CandidateForm} />
		</Route>
	</Route>
);
