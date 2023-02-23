import { JSONSchemaType } from 'ajv';
import { Question, UpdateQuestion } from '../../types/api/questions';

export const questionSchema: JSONSchemaType<Question> = {
  title: 'Question',
  type: 'object',
  properties: {
    id: { type: 'integer' },
    question: { type: 'string' },
    possibleAnswers: { type: 'array', items: { type: 'string' } },
    correctAnswer: { anyOf: [{ type: 'string' }, { type: 'integer' }] }
  },
  required: ['id', 'question', 'correctAnswer', 'possibleAnswers']
};

export const updateQuestionSchema: JSONSchemaType<UpdateQuestion> = {
  title: 'UpdateQuestion',
  type: 'object',
  properties: {
    question: { type: 'string', nullable: true },
    possibleAnswers: { type: 'array', items: { type: 'string' }, nullable: true },
    correctAnswer: { type: 'string', nullable: true }
  }
};

export const questionsListSchema: JSONSchemaType<Question[]> = {
  title: 'QuestionsList',
  type: 'array',
  items: {
    $ref: '#/definitions/question',
    type: 'object',
    required: ['id', 'question', 'correctAnswer', 'possibleAnswers']
  },
  definitions: {
    question: {
      title: 'Question',
      type: 'object',
      properties: {
        id: { type: 'integer' },
        question: { type: 'string' },
        possibleAnswers: { type: 'array', items: { type: 'string' } },
        correctAnswer: { anyOf: [{ type: 'string' }, { type: 'integer' }] }
      },
      required: ['id', 'question', 'correctAnswer', 'possibleAnswers']
    }
  }
};
