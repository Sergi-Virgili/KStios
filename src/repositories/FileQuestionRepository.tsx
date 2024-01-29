import { Question } from "../domain/Question";
import { QuestionRepository } from "./QuestionRepository";
import { textToJSON, textToJSON2 } from "../spikes/realtimeConverter";
import Answer from "../domain/Answer";

const QuizList = [
    {
        id: 1,
        title: "AWS Cloud Practitioner 1",
        file: "./data/data.txt",
    },
    {
        id: 2,
        title: "AWS Cloud Practitioner 2",
        file: "./data/data2.txt",
    },
    {
        id: 3,
        title: "AWS Cloud Practitioner 3",
        file: "./data/data3.txt",
    },
    {
        id: 4,
        title: "AWS Cloud Practitioner 4",
        file: "./data/data4.txt",
    },
    {
        id: 5,
        title: "AWS Cloud Practitioner 5",
        file: "./data/data5.txt",
    },
    {
        id: 6,
        title: "AWS Cloud Practitioner 6",
        file: "./data/data6.txt",
    },
    // {
    //     id: 7,
    //     title: "AWS Cloud Practitioner C02 - 1",
    //     file: "./data/C02/data7.txt",
    // },
];

export class FileQuestionRepository implements QuestionRepository {

    private fetchInitialQuestions = (file?: string) => fetch(file || "/data/data.txt")
            .then((res) => res.text())
            .then((content) => {
                return textToJSON(content);
            });

    public fetchInitQuestions = async (file?: string) : Promise<Question[]> => {
        const questions: Question[] = [];
        await this.fetchInitialQuestions(file).then((data) => {
            this.convertToDomain(data, questions);
        });
        // return questions.sort(() => Math.random() - 0.5);
        return questions
    };

    private fetchAllQuestions = async (): Promise<Question[]> => {
        const questionsList = QuizList.map(async (quiz) => await this.fetchInitQuestions(quiz.file));
        const questions = (await Promise.all(questionsList)).flat();
        return questions;
    }

    public fetchRandomQuestions = async (): Promise<Question[]> => {
        // TODO classify questions by category and return a random questions.
        const questions = (await this.fetchAllQuestions()).sort(() => Math.random() - 0.5);
        return questions.slice(0, 65);
    }

    private fetchInitialQuestionsc02 = (file: string) => fetch(file || "/data/data.txt")
            .then((res) => res.text())
            .then((content) => {
                return textToJSON2(content);
            });

    public fetchQuestionsC02 = async (file: string): Promise<Question[]> => {
        console.log("fetchQuestionsC02");
        const questions: Question[] = [];
        await this.fetchInitialQuestionsc02(file).then((data) => {
            this.convertToDomain(data, questions);
        });
        // return questions.sort(() => Math.random() - 0.5);
        return questions
    }

    private convertToDomain(data: { question: string; answers: { answer: string; correct: boolean; }[]; explanation: string; incorrect: string; references: string; }[], questions: Question[]) {
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
    }
}