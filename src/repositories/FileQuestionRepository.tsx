import { Question } from "../domain/Question";
import { QuestionRepository } from "./QuestionRepository";
import { textToJSON } from "../spikes/realtimeConverter";
import Answer from "../domain/Answer";

export class FileQuestionRepository implements QuestionRepository {

    fetchInitialQuestions = (file?: string) =>
        fetch(file || "/data/data.txt")
            .then((res) => res.text())
            .then((content) => {
                return textToJSON(content);
            });

    fetchInitQuestions = async (
        file?: string
    ): Promise<Question[]> => {
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
}