export interface Questions {
  questions: Question[];
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface Answer {
  answer: string;
  correct: boolean;
  explanation: string;
}
