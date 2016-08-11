import {post} from 'axios';

let path = 'http://localhost:1337/parse/classes/question',
	conf = {
		headers: {
			'X-Parse-Application-Id': 'app',
			'Content-Type': 'application/json'
		}
	};

class QuestionApi {

	static saveQuestion(question) {
		return post(path, question, conf);
	}
};

export default QuestionApi;