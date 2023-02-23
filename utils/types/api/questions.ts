export interface Question {
  id: number;
  question: string;
  possibleAnswers: string[];
  correctAnswer: string | number;
}

export interface UpdateQuestion extends Partial<Omit<Question, 'id'>> {}
