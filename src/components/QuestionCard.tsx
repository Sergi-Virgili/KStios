import { Button, Card, Pagination } from "flowbite-react";
import Answer from "../domain/Answer";
import { Question } from "../domain/Question";
import Explanation from "./Explanation";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
interface Props {
  actualQuestion: Question;
  questionNumber: number;
  answerStyle: any;
  totalPages: number;
  handleSubmit: () => void;
  handleCheck: (answer: Answer) => void;
  handleChangePage: (page: number) => void;
  correctionMode: boolean;
}

function QuestionCard(props: Props) {
  const [explainActive, setExplainActive] = useState(false);
  useEffect(() => {
    setExplainActive(false);
  }, [props.actualQuestion]);
  // setExplainActive(false);
  // function resultAvise() {
  //   if (!props.correctionMode) return "";
  //   return props.actualQuestion.isQuestionCorrect() ? <p>OK</p> : <p>FAILED</p>;
  // }
  return (
    <article className="min-w-full">
      {/* {resultAvise()} */}

      <p className="mb-6 text-xl font-semibold leading-8 text-slate-800">
        {parse(props.actualQuestion.question)}{" "}
        {/* {props.actualQuestion.numberOfCorrectAnswers()} */}
      </p>
      <ul className="space-y-3">
        {props.actualQuestion.answers.map((x: Answer, index: number) => (
          <li key={index}>
            <Card
              onClick={() => props.handleCheck(x)}
              className={`w-full rounded-3xl transition-all ${props.answerStyle(
                x
              )}`}
            >
              <p className="text-base font-medium leading-7">{x.answer}</p>
            </Card>
          </li>
        ))}
      </ul>
      <section className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {!props.actualQuestion.isSubmitted ? (
          <Button pill className="bg-brand-700 hover:bg-brand-900" onClick={props.handleSubmit}>
            Check answer
          </Button>
        ) : (
          <Button
            pill
            color="pink"
            onClick={() => setExplainActive(!explainActive)}
          >
            {!explainActive ? <>Show explanation</> : <>Hide explanation</>}
          </Button>
        )}
        <Pagination
          className="p-0"
          layout="navigation"
          currentPage={props.questionNumber + 1}
          onPageChange={(page) => {
            props.handleChangePage(page);
          }}
          showIcons
          totalPages={props.totalPages}
        />
      </section>
      {explainActive ? (
        <Explanation
          explanation={props.actualQuestion.explanation || ""}
          incorrect={props.actualQuestion.incorrect || ""}
          references={props.actualQuestion.references || ""}
        />
      ) : (
        ""
      )}
    </article>
  );
}

export default QuestionCard;
