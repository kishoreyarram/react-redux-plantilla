import {post} from 'axios';

let path = 'http://10.3.2.48:1337/parse/classes/question',
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