import { useEffect, useState } from "react";
import { fetchInitQuestions } from "../services/QuestionServices";
import { Question } from "../domain/Question";
import Answer from "../domain/Answer";
import QuestionCard from "./QuestionCard";
import QuestionCounter from "./QuestionCounter";

function Questions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionNumber, setCurrentQuestion] = useState(0);
  const [correctionMode, setCorrectionMode] = useState(false);

  const actualQuestion = questions[questionNumber];

  const handlePrev = () => {
    if (questionNumber > 0) setCurrentQuestion(questionNumber - 1);
  };

  const handleNext = () => {
    if (questionNumber < questions.length - 1)
      setCurrentQuestion(questionNumber + 1);
  };
  useEffect(() => {
    fetchInitQuestions().then((data) => {
      setQuestions(data);
    });
  }, []);

  useEffect(() => {
    if (questions.length === 0) return;
    setCorrectionMode(questions[questionNumber].isSubmitted);
  }, [questionNumber]);

  const handleCheck = (answer: Answer) => {
    answer.checkAnswer();
    setQuestions([...questions]);
  };

  const handleSubmit = () => {
    questions[questionNumber].submit();
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
      <QuestionCounter
        questionNumber={questionNumber + 1}
        questionsTotal={questions.length}
      ></QuestionCounter>
      <QuestionCard
        actualQuestion={actualQuestion}
        correctionMode={correctionMode}
        questionNumber={questionNumber}
        answerStyle={answerStyle}
        handleSubmit={handleSubmit}
        handleCheck={handleCheck}
      ></QuestionCard>
      <section>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </section>
    </>
  );
}

export default Questions;
