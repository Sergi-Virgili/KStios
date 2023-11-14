import Answer from "./Answer";
import { Question } from "./Question";

const createMultiAnswerQuestion = () => {
  return new Question("What is your name?", [
    new Answer(1, "dwsd", true, "adf"),
    new Answer(2, "dwsd", true, "adf"),
  ]);
};

const createSingleAnswerQuestion = () => {
  return new Question("What is your name?", [
    new Answer(1, "dwsd", true, "adf"),
    new Answer(2, "dwsd", false, "adf"),
  ]);
};

describe("Question", () => {
  it("should be multi answer", () => {
    const sut = createMultiAnswerQuestion().numberOfCorrectAnswers();
    expect(sut).toBe(2);
  });

  it("should be single answer", () => {
    const sut = createSingleAnswerQuestion().numberOfCorrectAnswers();
    expect(sut).toBe(1);
  });

  it("try if answer is correct for a question", () => {
    const question: Question = createSingleAnswerQuestion();
    const sut = createSingleAnswerQuestion().isAnswerCorrect(question.answers[0]);

    expect(sut).toBe(true);
  });

  it("try if question is correct in a single question", () => {
    const question: Question = createSingleAnswerQuestion();
    question.answers[0].isChecked = true;
    const sut = question.isQuestionCorrect();

    expect(sut).toBe(true);
  });
});
