import { Question } from "../domain/Question";
import { QuestionRepository } from "../repositories/QuestionRepository";

export class QuestionServices {

  questionRepository: QuestionRepository;

  constructor(QuestionRepository: QuestionRepository) {
    this.questionRepository = QuestionRepository;
  }

  fetchInitQuestions = async (file: string): Promise<Question[]> => {
    return await this.questionRepository.fetchInitQuestions(file);
  }

  //TODO: implement this
  fetchRandomQuestions = async (): Promise<Question[]> => {
      return await this.questionRepository.fetchRandomQuestions();
  }
}