import { IQuestion } from "../types";
import Answer from "./Answer";

export class Question implements IQuestion {
  question: string;
  answers: Answer[];
  isSubmitted: boolean = false;
  explanation?: string = "";
  incorrect?: string = "";
  references?: string = "";

  constructor(
    question: string,
    answers: Answer[],
    explanation?: string,
    incorrect?: string,
    references?: string
  ) {
    this.question = question;
    this.answers = answers;
    this.explanation = explanation;
    this.incorrect = incorrect;
    this.references = references;
  }

  numberOfCorrectAnswers(): number {
    return this.answers.filter((x) => x.correct).length;
  }

  isAnswerCorrect(answer: Answer): boolean {
    if (answer.correct) {
      return true;
    }

    return false;
  }

  isQuestionCorrect(): boolean | void {
    return this.answers.every((x) => x.isChecked === x.correct);
  }

  submit(): void {
    this.isSubmitted = true;
    this.answers.forEach((x) => (x.isSubmided = true));
  }
}
