import { useEffect, useState } from "react";

import { fetchInitQuestions } from "../services/QuestionServices";
import { Question } from "../domain/Question";
import Answer from "../domain/Answer";

function Questions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctionMode, setCorrectionMode] = useState(false);

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1)
      setCurrentQuestion(currentQuestion + 1);
  };
  useEffect(() => {
    fetchInitQuestions().then((data) => {
      setQuestions(data);
    });
  }, []);

  useEffect(() => {
    if (questions.length === 0) return;
    setCorrectionMode(questions[currentQuestion].isSubmitted);
  }, [currentQuestion]);

  const handleCheck = (answer: Answer) => {
    answer.checkAnswer();
    setQuestions([...questions]);
  };

  const handleSubmit = () => {
    questions[currentQuestion].submit();
    setCorrectionMode(true);
  };

  const answerStyle = (answer: Answer) => {
    if (!correctionMode) return "white";
    if (answer.correct && answer.isChecked) {
      return "green";
    }
    if (answer.correct && !answer.isChecked) {
      return "orange";
    }
    if (answer.isChecked) {
      return "red";
    }
  };

  if (questions.length === 0) return <h2>Loading...</h2>;
  return (
    <>
      <article className="card">
        {resultAvise()}
        <h2>Pregunta {currentQuestion + 1}</h2>
        <p>
          {questions[currentQuestion].question}{" "}
          {questions[currentQuestion].numberOfCorrectAnswers()}
        </p>
        <ul>
          {questions[currentQuestion].answers.map((x, index) => (
            <li
              key={index}
              style={{
                backgroundColor: answerStyle(x),
              }}
            >
              <input
                type="checkbox"
                checked={x.isChecked}
                onChange={() => handleCheck(x)}
                name="{index}"
                id={index.toString()}
              />
              {x.answer}
            </li>
          ))}
        </ul>
        <button onClick={handleSubmit}>Submit</button>
      </article>
      <section>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </section>
    </>
  );

  function resultAvise() {
    if (!correctionMode) return "";
    return questions[currentQuestion].isQuestionCorrect() ? (
      <p>OK</p>
    ) : (
      <p>FAILED</p>
    );
  }
}

export default Questions;
