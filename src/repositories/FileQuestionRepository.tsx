import { Question } from "../domain/Question";
import { QuestionRepository } from "./QuestionRepository";
import { textToJSON, textToJSON2 } from "../spikes/realtimeConverter";
import Answer from "../domain/Answer";

const QuizList = [
  {
    title: "Random Quiz (NEW)",
    file: "random",
    type: "random",
  },
  {
    title: "AWS Cloud Practitioner 1",
    file: "./data/data.txt",
    type: "C01",
  },
  {
    title: "AWS Cloud Practitioner 2",
    file: "./data/data2.txt",
    type: "C01",
  },
  {
    title: "AWS Cloud Practitioner 3",
    file: "./data/data3.txt",
    type: "C01",
  },
  {
    title: "AWS Cloud Practitioner 4",
    file: "./data/data4.txt",
    type: "C01",
  },
  {
    title: "AWS Cloud Practitioner 5",
    file: "./data/data5.txt",
    type: "C01",
  },
  {
    title: "AWS Cloud Practitioner 6",
    file: "./data/data6.txt",
    type: "C01",
  },
  {
    title: "AWS Cloud Practitioner 6",
    file: "./data/data6.txt",
    type: "C01",
  },
  {
    title: "AWS Cloud Practitioner C02 - 1",
    file: "./data/C02/data1.txt",
    type: "C02",
  },
  {
    title: "AWS Cloud Practitioner C02 - 2",
    file: "./data/C02/data2.txt",
    type: "C02",
  },
  {
    title: "AWS Cloud Practitioner C02 - 3",
    file: "./data/C02/data3.txt",
    type: "C02",
  },
  {
    title: "AWS Cloud Practitioner C02 - 4",
    file: "./data/C02/data4.txt",
    type: "C02",
  },
  {
    title: "AWS Cloud Practitioner C02 - 5",
    file: "./data/C02/data5.txt",
    type: "C02",
  },
  {
    title: "AWS Cloud Practitioner C02 - 6",
    file: "./data/C02/data6.txt",
    type: "C02",
  },
];

export class FileQuestionRepository implements QuestionRepository {
  public fetchQuestionsAzure = async (file: string): Promise<Question[]> => {
    const questions: Question[] = [];
    await fetch(file)
      .then((res) => res.text())
      .then((content) => {
        this.convertToDomain(JSON.parse(content), questions);
      });
    return questions;
  };

  private fetchInitialQuestions = (file?: string) =>
    fetch(file || "/data/data.txt")
      .then((res) => res.text())
      .then((content) => {
        return textToJSON(content);
      });

  public fetchInitQuestions = async (file?: string): Promise<Question[]> => {
    const questions: Question[] = [];
    await this.fetchInitialQuestions(file).then((data) => {
      this.convertToDomain(data, questions);
    });
    // return questions.sort(() => Math.random() - 0.5);
    return questions;
  };

  private fetchAllQuestions = async (): Promise<Question[]> => {
    const questionsList = QuizList.map(async (quiz) => {
      if (quiz.type === "C01") return await this.fetchInitQuestions(quiz.file);
      if (quiz.type === "C02") return await this.fetchQuestionsC02(quiz.file);
      return [];
    });
    const questions = (await Promise.all(questionsList)).flat();
    return questions;
  };

  public fetchRandomQuestions = async (): Promise<Question[]> => {
    // TODO classify questions by category and return a random questions.
    const questions = (await this.fetchAllQuestions()).sort(
      () => Math.random() - 0.5
    );
    return questions.slice(0, 65);
  };

  private fetchInitialQuestionsc02 = (file: string) =>
    fetch(file || "/data/data.txt")
      .then((res) => res.text())
      .then((content) => {
        return textToJSON2(content);
      });

  public fetchQuestionsC02 = async (file: string): Promise<Question[]> => {
    const questions: Question[] = [];
    await this.fetchInitialQuestionsc02(file).then((data) => {
      this.convertToDomain(data, questions);
    });
    return questions.sort(() => Math.random() - 0.5);
  };

  private convertToDomain(
    data: {
      question: string;
      answers: { answer: string; correct: boolean }[];
      explanation: string;
      incorrect?: string;
      references?: string;
    }[],
    questions: Question[]
  ) {
    data.map((x: any) => {
      questions.push(
        new Question(
          x.question,
          x.answers.map(
            (y: any) => new Answer(1, y.answer, y.correct, y.feedback)
          ),
          x.explanation,
          x.incorrect,
          x.references
        )
      );
    });
    return questions;
  }
}
