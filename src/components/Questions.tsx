import axios from "axios";
import { useEffect, useState } from "react";
import { Question } from "../types";

function Questions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1)
      setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    axios.get("./data/exam01.json").then((response) => {
      setQuestions(response.data.questions);
      console.log(response.data);
    });
  }, []);

  if (questions.length === 0) return <h2>Loading...</h2>;
  return (
    <>
      <article className="card">
        <h2>KStion {currentQuestion}</h2>
        <p>{questions[currentQuestion].question}</p>
        <ul>
          {questions[currentQuestion].answers.map((x, index) => (
            <li key={index}>
              <input type="checkbox" name="{index}" id="{qindex}" /> {x.answer}
            </li>
          ))}
        </ul>
        <button>Submit</button>
      </article>
      <section>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </section>
    </>
  );
}

export default Questions;
