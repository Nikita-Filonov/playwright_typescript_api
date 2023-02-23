export interface Question {
  id: number;
  question: string;
  possibleAnswers: string[];
  correctAnswer: string;
}

export interface UpdateQuestion extends Partial<Omit<Question, 'id'>> {}
