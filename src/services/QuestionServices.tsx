import axios from "axios";
import { Question } from "../domain/Question";
import Answer from "../domain/Answer";
import { textToJSON } from "../spikes/realtimeConverter";

// export const fetchInitialQuestions = axios
//   .get("./data/exam01.json")
//   .then((response) => {
//     return response.data.questions;
//   });
export const fetchInitialQuestions = fetch("/data/data.txt")
  .then((res) => res.text())
  .then((content) => {
    return textToJSON(content);
  });

export const fetchInitQuestions = async (): Promise<Question[]> => {
  let questions: Question[] = [];
  await fetchInitialQuestions.then((data) => {
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
  return questions;
};

// class QuestionService {
//   async getInitialQuestions() {
//     let initialData = fetchInitialQuestions;
//   }
// }

// console.log this line  returns a promise
