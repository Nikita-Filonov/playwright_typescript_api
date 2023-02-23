import { randomNumber, randomString } from '../fakers';
import { Question, UpdateQuestion } from '../types/questions';

export const getRandomUpdateQuestion = (): UpdateQuestion => ({
  question: randomString(),
  correctAnswer: randomString(),
  possibleAnswers: [randomString()]
});

export const getRandomQuestion = (): Question => ({
  id: randomNumber(),
  question: randomString(),
  correctAnswer: randomString(),
  possibleAnswers: [randomString()]
});
