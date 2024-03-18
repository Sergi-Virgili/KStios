import { Question } from "../domain/Question";

export interface QuestionRepository {
  fetchInitQuestions: (file: string) => Promise<Question[]>;
  fetchRandomQuestions: () => Promise<Question[]>;
  fetchQuestionsC02: (file: string) => Promise<Question[]>;
  fetchQuestionsAzure: (file: string) => Promise<Question[]>;
}
