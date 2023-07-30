import { IAnswer } from "../types";

export default class Answer implements IAnswer {
  id: number;
  answer: string;
  correct: boolean;
  explanation: string;
  isChecked: boolean = false;
  isSubmided: boolean = false;

  constructor(
    id: number,
    answer: string,
    correct: boolean,
    explanation: string
  ) {
    this.id = id;
    this.answer = answer;
    this.correct = correct;
    this.explanation = explanation;
  }
  checkAnswer(): void {
    if (this.isSubmided) return;
    this.isChecked = !this.isChecked;
  }
}
