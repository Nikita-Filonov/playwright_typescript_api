import test, { APIRequestContext, APIResponse } from '@playwright/test';
import { expectStatusCode } from '../../utils/assertions/solutions';
import { APIRoutes } from '../../utils/constants/routes';
import { APIClient } from '../../utils/types/api/client';
import { Question, UpdateQuestion } from '../../utils/types/questions';

export class QuestionsAPIClient implements APIClient {
  constructor(public context: APIRequestContext) {}

  async getQuestionAPI(questionId: number): Promise<APIResponse> {
    return await test.step(`Getting question with id "${questionId}"`, async () => {
      return await this.context.get(`${APIRoutes.Questions}/${questionId}`);
    });
  }

  async getQuestionsAPI(): Promise<APIResponse> {
    return await test.step('Getting questions', async () => {
      return await this.context.get(APIRoutes.Questions);
    });
  }

  async createQuestionAPI(data: Question): Promise<APIResponse> {
    return await test.step(`Creating question with id "${data.id}"`, async () => {
      return await this.context.post(APIRoutes.Questions, { data });
    });
  }

  async updateQuestionAPI(questionId: number, data: UpdateQuestion): Promise<APIResponse> {
    return await test.step(`Updating question with id "${questionId}"`, async () => {
      return await this.context.patch(`${APIRoutes.Questions}/${questionId}`, { data });
    });
  }

  async deleteQuestionAPI(questionId: number): Promise<APIResponse> {
    return await test.step(`Deleting question with id "${questionId}"`, async () => {
      return await this.context.delete(`${APIRoutes.Questions}/${questionId}`);
    });
  }

  async createQuestion(data: Question): Promise<Question> {
    const response = await this.createQuestionAPI(data);
    await expectStatusCode({ actual: response.status(), expected: 201, api: response.url() });

    return await response.json();
  }
}
