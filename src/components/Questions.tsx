import { useEffect, useState } from "react";
import { fetchInitQuestions } from "../services/QuestionServices";
import { Question } from "../domain/Question";
import Answer from "../domain/Answer";
import QuestionCard from "./QuestionCard";
import QuestionCounter from "./QuestionCounter";
import { Button, Pagination } from "flowbite-react";
import { Card } from "flowbite-react";
import StopWatch from "./StoptWatch";
import { Iquiz } from "../App";

function Questions({ quiz }: { quiz: Iquiz }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionNumber, setCurrentQuestion] = useState(0);
  const [correctionMode, setCorrectionMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const actualQuestion = questions[questionNumber];
  const isQuizFinished: Boolean = questions.every((x) => x.isSubmitted);

  useEffect(() => {
    initQuiz();
  }, []);

  useEffect(() => {
    if (questions.length === 0) return;
    setCorrectionMode(questions[questionNumber].isSubmitted);
  }, [questionNumber]);

  const handleCheck = (answer: Answer) => {
    if (actualQuestion.isFull() && !answer.isChecked) return;
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
    <>
      <Card className="p-0 mt-0 w-full min-h-screen">
        <header className="flex w-full rounded-2xl">
          <div className=" w-9/12  flex-column ">
            <h1 className=" text-pink-600 font-bold text-3xl">Qyz</h1>
            <h1 className="font-bold text-xl">{quiz.title}</h1>
          </div>
          <div className=" flex  gap-5 mb-4 bg-cyan-950 rounded-2xl text-gray-100 w-3/12  m-0  p-5 justify-end">
            <QuestionCounter
              questionNumber={currentPage}
              questionsTotal={questions.length}
            ></QuestionCounter>
            <StopWatch />
          </div>
        </header>
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
              handleChangePage(page);
            }}
            showIcons
            totalPages={questions.length}
          />
        </section>
        <div>
          {!isQuizFinished ? (
            <Button onClick={handlerFinishQuiz}>Finish Quiz</Button>
          ) : (
            <Button onClick={initQuiz}>Restart Quiz</Button>
          )}
          <ul className=" flex-wrap flex w-full gap-1">
            {questions.map((question, index) => (
              <li key={index}>
                <a
                  className={
                    "flex w-10 h-10 justify-center items-center hover:cursor-pointer hover:bg-pink-300" +
                    `
                      
                      ${
                        questionNumber === index
                          ? " bg-pink-300"
                          : question.isSubmitted
                          ? question.isQuestionCorrect()
                            ? " bg-green-300"
                            : " bg-red-400"
                          : ""
                      }
                      `
                  }
                  onClick={() => handleChangePage(index + 1)}
                >
                  <p>{index + 1}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </>
  );

  function initQuiz() {
    fetchInitQuestions(quiz.file).then((data) => {
      setQuestions(data);
      handleChangePage(1);
    });
  }

  function handlerFinishQuiz() {
    const finishedQuiz: Question[] = questions.map((question) => {
      question.submit();
      return question;
    });
    setQuestions(finishedQuiz);
  }

  function handleChangePage(page: number) {
    setCorrectionMode(false);
    setCurrentPage(page);
    setCurrentQuestion(page - 1);
  }
}

export default Questions;
