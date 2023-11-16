import { useEffect, useState } from "react";
import { Question } from "../domain/Question";
import Answer from "../domain/Answer";
import QuestionCard from "./QuestionCard";
import QuestionCounter from "./QuestionCounter";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import StopWatch from "./StoptWatch";
import { Iquiz } from "../App";
import { FileQuestionRepository } from "../repositories/FileQuestionRepository";
import { QuestionServices } from "../services/QuestionServices";

function Questions({ quiz }: { quiz: Iquiz }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionNumber, setCurrentQuestion] = useState(0);
  const [correctionMode, setCorrectionMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const actualQuestion = questions[questionNumber];
  const isQuizFinished: boolean = questions.every((x) => x.isSubmitted);
  const percent =
    (questions.filter((x) => x.isQuestionCorrect()).length / questions.length) *
    100;
  // const percent = 95.55423;

  useEffect(() => {
    initQuiz();
  }, []);

  useEffect(() => {
    if (questions.length === 0) return;
    setCorrectionMode(questions[questionNumber].isSubmitted);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
      return "bg-green-100";
    }
    if (correctionMode && answer.isChecked && !answer.correct) {
      return "bg-red-300 border-2 border-red-500";
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
          <div className=" md:flex  gap-5 mb-4 bg-cyan-950 rounded-2xl text-gray-100 w-3/12 p-2 md:p-5 justify-end ">
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
          totalPages={questions.length}
          answerStyle={answerStyle}
          handleSubmit={handleSubmit}
          handleCheck={handleCheck}
          handleChangePage={handleChangePage}
        ></QuestionCard>
        <section>
          {/* <Pagination
            layout="navigation"
            currentPage={currentPage}
            onPageChange={(page) => {
              handleChangePage(page);
            }}
            showIcons
            totalPages={questions.length}
          /> */}
        </section>
        <div>
          <ul className=" flex-wrap flex w-full gap-1 mb-8">
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
          <div className="flex  items-center ">
            {!isQuizFinished ? (
              <Button color="pink" pill onClick={handlerFinishQuiz}>
                Finish Quiz
              </Button>
            ) : (
              <div className="flex justify-start bg-red-50 rounded-3xl">
                <p className="text-pink-600 font-bold text-xl center mx-8 p-2">
                  {percent.toFixed(2)} %
                </p>
                <Button pill color="pink" onClick={initQuiz}>
                  Restart Quiz
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card>
    </>
  );

  async function initQuiz() {
    const questionRepository = new FileQuestionRepository()
    const questionService = new QuestionServices(questionRepository);
    let data;
    if (quiz.file === "random") { 
       data = await questionService.fetchRandomQuestions();
    }
    else {
       data = await questionService.fetchInitQuestions(quiz.file)
    }
    setQuestions(data);
    handleChangePage(1);
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
