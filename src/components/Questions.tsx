import { useEffect, useState } from "react";
import { fetchInitQuestions } from "../services/QuestionServices";
import { Question } from "../domain/Question";
import Answer from "../domain/Answer";
import QuestionCard from "./QuestionCard";
import QuestionCounter from "./QuestionCounter";
import { Pagination } from "flowbite-react";
import { Card } from "flowbite-react";

function Questions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionNumber, setCurrentQuestion] = useState(0);
  const [correctionMode, setCorrectionMode] = useState(false);

  const actualQuestion = questions[questionNumber];
  const [currentPage, setCurrentPage] = useState(1);

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
    console.log(answer);
    answer.checkAnswer();
    setQuestions([...questions]);
  };

  const handleSubmit = () => {
    questions[questionNumber].submit();
    setCorrectionMode(true);
  };

  const answerStyle = (answer: Answer) => {
    if (!correctionMode && answer.isChecked)
      return "bg-sky-100 border-2 border-blue-400 hover:bg-sky-100 hover:cursor-pointer";
    if (!correctionMode) return "white hover:bg-sky-100 hover:cursor-pointer";

    if (correctionMode && answer.correct && answer.isChecked) {
      return "border-2 border-green-500 bg-green-300";
    }
    if (correctionMode && answer.correct && !answer.isChecked) {
      return "bg-orange-300";
    }
    if (correctionMode && answer.isChecked) {
      return "bg-red-500";
    }
  };

  if (questions.length === 0) return <h2>Loading...</h2>;
  return (
    <Card className="w-full p-8">
      <QuestionCounter
        questionNumber={currentPage}
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
        <Pagination
          currentPage={currentPage}
          onPageChange={(page) => {
            setCurrentPage(page);
            setCurrentQuestion(page - 1);
          }}
          showIcons
          totalPages={questions.length}
        />
      </section>
    </Card>
  );
}

export default Questions;
