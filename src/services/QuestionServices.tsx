import { Question } from "../domain/Question";
import { QuestionRepository } from "../repositories/QuestionRepository";

export class QuestionServices {
  questionRepository: QuestionRepository;

  constructor(QuestionRepository: QuestionRepository) {
    this.questionRepository = QuestionRepository;
  }

  fetchInitQuestions = async (file: string): Promise<Question[]> => {
    return await this.questionRepository.fetchInitQuestions(file);
  };

  fetchRandomQuestions = async (): Promise<Question[]> => {
    return await this.questionRepository.fetchRandomQuestions();
  };

  fetchQuestionsC02 = async (file: string): Promise<Question[]> => {
    return await this.questionRepository.fetchQuestionsC02(file);
  };

  fetchQuestionsAzure = async (file: string): Promise<Question[]> => {
    return await this.questionRepository.fetchQuestionsAzure(file);
  };
}
