import { getRandomQuestion, getRandomUpdateQuestion } from '../utils/api/questions';
import { assertQuestion, assertUpdateQuestion } from '../utils/assertions/api/questions';
import { expectStatusCode } from '../utils/assertions/solutions';
import { Question } from '../utils/types/questions';
import { questionsTest as test } from './questions-test';

test.describe('Questions', () => {
  test('Get question', async ({ question, questionsClient }) => {
    const response = await questionsClient.getQuestionAPI(question.id);
    const json: Question = await response.json();

    await expectStatusCode({ actual: response.status(), expected: 200, api: response.url() });
    assertQuestion({ expectedQuestion: question, actualQuestion: json });
  });

  test('Get questions', async ({ questionsClient }) => {
    const response = await questionsClient.getQuestionsAPI();

    await expectStatusCode({ actual: response.status(), expected: 200, api: response.url() });
  });

  test('Create question', async ({ questionsClient }) => {
    const payload = getRandomQuestion();

    const response = await questionsClient.createQuestionAPI(payload);
    const json: Question = await response.json();

    await expectStatusCode({ actual: response.status(), expected: 201, api: response.url() });
    assertQuestion({ expectedQuestion: payload, actualQuestion: json });
  });

  test('Update question', async ({ question, questionsClient }) => {
    const payload = getRandomUpdateQuestion();

    const response = await questionsClient.updateQuestionAPI(question.id, payload);
    const json: Question = await response.json();

    await expectStatusCode({ actual: response.status(), expected: 200, api: response.url() });
    assertUpdateQuestion({ expectedQuestion: payload, actualQuestion: json });
  });

  test('Delete question', async ({ question, questionsClient }) => {
    const responseQuestionResponse = await questionsClient.deleteQuestionAPI(question.id);
    const getQuestionResponse = await questionsClient.deleteQuestionAPI(question.id);

    await expectStatusCode({
      actual: responseQuestionResponse.status(),
      expected: 200,
      api: responseQuestionResponse.url()
    });
    await expectStatusCode({ actual: getQuestionResponse.status(), expected: 404, api: getQuestionResponse.url() });
  });
});
