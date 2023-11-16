import { Question } from "../domain/Question";
import { QuestionRepository } from "./QuestionRepository";
import { textToJSON } from "../spikes/realtimeConverter";
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
        });
        return questions.sort(() => Math.random() - 0.5);
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
}