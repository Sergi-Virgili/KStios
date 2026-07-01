import { SetStateAction, useEffect, useState } from "react";
import { Question } from "../domain/Question";
import Answer from "../domain/Answer";
import QuestionCard from "./QuestionCard";
import QuestionCounter from "./QuestionCounter";
import { Button } from "flowbite-react";
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
      return "border-2 border-brand-500 bg-brand-50 text-brand-950 shadow-interactive hover:cursor-pointer";
    if (!correctionMode)
      return "border border-slate-200 bg-white text-slate-950 hover:border-brand-500 hover:bg-brand-50 hover:cursor-pointer hover:shadow-surface";

    if (correctionMode && answer.correct && answer.isChecked) {
      return "border-2 border-emerald-500 bg-emerald-100 text-emerald-950";
    }
    if (correctionMode && answer.correct && !answer.isChecked) {
      return "border border-emerald-200 bg-emerald-50 text-emerald-950";
    }
    if (correctionMode && answer.isChecked && !answer.correct) {
      return "border-2 border-rose-500 bg-rose-100 text-rose-950";
    }
  };

  if (questions.length === 0)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-surface bg-white px-6 py-4 font-bold text-brand-950 shadow-surface">
          Loading quiz...
        </div>
      </div>
    );

  return (
    <div className="min-h-screen px-4 pb-8 md:px-6">
      <section className="rounded-surface bg-white p-5 shadow-surface md:p-8">
        <header className="mb-8 grid gap-5 rounded-hero bg-gradient-to-br from-brand-950 via-slate-900 to-accent-950 p-5 text-white md:grid-cols-[1fr_auto] md:items-center md:p-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-100">
              Practice session
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-tight">KStios</h1>
            <p className="mt-1 text-lg font-semibold text-slate-200">{quiz.title}</p>
          </div>
          <div className="flex w-fit gap-4 rounded-2xl bg-white/10 p-4 text-sm backdrop-blur md:justify-self-end">
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
        <div>
          <ul className="mb-8 grid grid-cols-7 gap-2 sm:grid-cols-10 md:grid-cols-13">
            {questions.map((question, index) => (
              <li key={index}>
                <a
                  className={
                    "flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold transition-all hover:cursor-pointer hover:bg-accent-50 hover:text-accent-700 " +
                    `
                      
                      ${
                        questionNumber === index
                          ? " bg-accent-500 text-white shadow-sm"
                          : question.isSubmitted
                          ? question.isQuestionCorrect()
                            ? " bg-emerald-100 text-emerald-900"
                            : " bg-rose-100 text-rose-900"
                          : " bg-slate-50 text-slate-700"
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
          <div className="flex items-center">
            {!isQuizFinished ? (
              <Button color="pink" pill onClick={handlerFinishQuiz}>
                Finish quiz
              </Button>
            ) : (
              <div className="flex items-center gap-4 rounded-3xl bg-accent-50 p-2">
                <p className="px-5 text-xl font-black text-accent-700">
                  {percent.toFixed(2)} %
                </p>
                <Button pill color="pink" onClick={initQuiz}>
                  Restart quiz
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );

  async function initQuiz() {
    const questionRepository = new FileQuestionRepository();
    const questionService = new QuestionServices(questionRepository);
    let data: SetStateAction<Question[]> = [];
    if (quiz.file === "random") {
      data = await questionService.fetchRandomQuestions();
    }
    if (quiz.type === "C01") {
      data = await questionService.fetchInitQuestions(quiz.file);
    }
    if (quiz.type === "C02") {
      data = await questionService.fetchQuestionsC02(quiz.file);
    }
    if (quiz.type === "AZ") {
      data = await questionService.fetchQuestionsAzure(quiz.file);
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
