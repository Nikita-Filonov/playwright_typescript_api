import { expect } from '@playwright/test';
import { getRandomQuestion, getRandomUpdateQuestion } from '../utils/api/questions';
import { assertQuestion, assertUpdateQuestion } from '../utils/assertions/api/questions';
import { Question } from '../utils/types/questions';
import { questionsTest as test } from './questions-test';

test.describe('Questions', () => {
  test('Get question', async ({ question, questionsClient }) => {
    const response = await questionsClient.getQuestionAPI(question.id);
    const json: Question = await response.json();

    expect(response.status()).toBe(200);
    assertQuestion({ expectedQuestion: question, actualQuestion: json });
  });

  test('Get questions', async ({ questionsClient }) => {
    const response = await questionsClient.getQuestionsAPI();

    expect(response.status()).toBe(200);
  });

  test('Create question', async ({ questionsClient }) => {
    const payload = getRandomQuestion();

    const response = await questionsClient.createQuestionAPI(payload);
    const json: Question = await response.json();

    expect(response.status()).toBe(201);
    assertQuestion({ expectedQuestion: payload, actualQuestion: json });
  });

  test('Update question', async ({ question, questionsClient }) => {
    const payload = getRandomUpdateQuestion();

    const response = await questionsClient.updateQuestionAPI(question.id, payload);
    const json: Question = await response.json();

    expect(response.status()).toBe(200);
    assertUpdateQuestion({ expectedQuestion: payload, actualQuestion: json });
  });

  test('Delete question', async ({ question, questionsClient }) => {
    const responseQuestionResponse = await questionsClient.deleteQuestionAPI(question.id);
    const getQuestionResponse = await questionsClient.deleteQuestionAPI(question.id);

    expect(responseQuestionResponse.status()).toBe(200);
    expect(getQuestionResponse.status()).toBe(404);
  });
});
