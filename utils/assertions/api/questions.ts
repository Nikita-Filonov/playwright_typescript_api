import { expect } from '@playwright/test';
import { Question, UpdateQuestion } from '../../types/questions';

type AssertQuestionProps = {
  expectedQuestion: Question;
  actualQuestion: Question;
};

type AssertUpdateQuestionProps = {
  expectedQuestion: UpdateQuestion;
  actualQuestion: UpdateQuestion;
};

export const assertQuestion = ({ expectedQuestion, actualQuestion }: AssertQuestionProps) => {
  expect(expectedQuestion.id).toBe(actualQuestion.id);
  expect(expectedQuestion.question).toBe(actualQuestion.question);
  expect(expectedQuestion.correctAnswer).toBe(actualQuestion.correctAnswer);
  expect(expectedQuestion.possibleAnswers).toEqual(actualQuestion.possibleAnswers);
};

export const assertUpdateQuestion = ({ expectedQuestion, actualQuestion }: AssertUpdateQuestionProps) => {
  expect(expectedQuestion.question).toBe(actualQuestion.question);
  expect(expectedQuestion.correctAnswer).toBe(actualQuestion.correctAnswer);
  expect(expectedQuestion.possibleAnswers).toEqual(actualQuestion.possibleAnswers);
};
