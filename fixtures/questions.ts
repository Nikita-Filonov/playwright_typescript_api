import { Fixtures } from '@playwright/test';
import { QuestionsAPIClient } from '../core/api/questions-api';
import { getAuthAPIContext } from '../core/context/auth-context';
import { getRandomQuestion } from '../utils/api/questions';
import { Question } from '../utils/types/api/questions';
import { UsersFixture } from './users';

export type QuestionsFixture = {
  questionsClient: QuestionsAPIClient;
  question: Question;
};

export const questionsFixture: Fixtures<QuestionsFixture, UsersFixture> = {
  questionsClient: async ({ testUser }, use) => {
    const authContext = await getAuthAPIContext({ user: testUser });
    const questionsClient = new QuestionsAPIClient(authContext);

    await use(questionsClient);
  },
  question: async ({ questionsClient }, use) => {
    const randomQuestion = getRandomQuestion();
    const question = await questionsClient.createQuestion(randomQuestion);

    await use(question);

    await questionsClient.deleteQuestionAPI(question.id);
  }
};
