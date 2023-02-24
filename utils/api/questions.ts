import { randomListOfStrings, randomNumber, randomString } from '../fakers';
import { Question, UpdateQuestion } from '../types/api/questions';

export const getRandomUpdateQuestion = (): UpdateQuestion => ({
  question: randomString(),
  correctAnswer: randomString(),
  possibleAnswers: randomListOfStrings()
});

export const getRandomQuestion = (): Question => ({
  id: randomNumber(),
  question: randomString(),
  correctAnswer: randomString(),
  possibleAnswers: randomListOfStrings()
});
