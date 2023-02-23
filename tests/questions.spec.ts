import { getRandomQuestion, getRandomUpdateQuestion } from '../utils/api/questions';
import { assertQuestion, assertUpdateQuestion } from '../utils/assertions/api/questions';
import { expectStatusCode } from '../utils/assertions/solutions';
import { questionSchema, questionsListSchema, updateQuestionSchema } from '../utils/schema/api/questions-schema';
import { validateSchema } from '../utils/schema/validator';
import { Question } from '../utils/types/api/questions';
import { questionsTest as test } from './questions-test';

test.describe('Questions', () => {
  test('Get question', async ({ question, questionsClient }) => {
    const response = await questionsClient.getQuestionAPI(question.id);
    const json: Question = await response.json();

    await expectStatusCode({ actual: response.status(), expected: 200, api: response.url() });
    await assertQuestion({ expectedQuestion: question, actualQuestion: json });
    await validateSchema({ schema: questionSchema, json });
  });

  test('Get questions', async ({ questionsClient }) => {
    const response = await questionsClient.getQuestionsAPI();
    const json: Question[] = await response.json();

    await expectStatusCode({ actual: response.status(), expected: 200, api: response.url() });
    await validateSchema({ schema: questionsListSchema, json });
  });

  test('Create question', async ({ questionsClient }) => {
    const payload = getRandomQuestion();

    const response = await questionsClient.createQuestionAPI(payload);
    const json: Question = await response.json();

    await expectStatusCode({ actual: response.status(), expected: 201, api: response.url() });
    await assertQuestion({ expectedQuestion: payload, actualQuestion: json });
    await validateSchema({ schema: questionSchema, json });
  });

  test('Update question', async ({ question, questionsClient }) => {
    const payload = getRandomUpdateQuestion();

    const response = await questionsClient.updateQuestionAPI(question.id, payload);
    const json: Question = await response.json();

    await expectStatusCode({ actual: response.status(), expected: 200, api: response.url() });
    await assertUpdateQuestion({ expectedQuestion: payload, actualQuestion: json });
    await validateSchema({ schema: updateQuestionSchema, json });
  });

  test('Delete question', async ({ question, questionsClient }) => {
    const deleteQuestionResponse = await questionsClient.deleteQuestionAPI(question.id);
    const getQuestionResponse = await questionsClient.getQuestionAPI(question.id);

    await expectStatusCode({
      actual: getQuestionResponse.status(),
      expected: 404,
      api: getQuestionResponse.url()
    });
    await expectStatusCode({
      actual: deleteQuestionResponse.status(),
      expected: 200,
      api: deleteQuestionResponse.url()
    });
  });
});
