import { Question } from "../domain/Question";

export interface QuestionRepository {
    fetchInitQuestions: (file: string) => Promise<Question[]>
    fetchRandomQuestions : () => Promise<Question[]>
}