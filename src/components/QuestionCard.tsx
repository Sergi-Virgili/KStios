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
  const [explainActive, setExplainActive] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setExplainActive(false);
    // handleVisibility();
  }, [props.actualQuestion]);

  function resultAvise() {
    if (!props.correctionMode) return "";
    return props.actualQuestion.isQuestionCorrect() ? <p>OK</p> : <p>FAILED</p>;
  }

  const handleVisibility = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 0);
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  };

  return (
    <div>
      <article
        className={`min-w-full   ${
          isVisible ? "opacity-1000" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        {resultAvise()}

        <p className=" text-gray-700 dark:text-gray-400 mb-5">
          {parse(props.actualQuestion.question)}
        </p>

        <ul>
          {props.actualQuestion.answers.map((x: Answer, index: number) => (
            <li key={index}>
              <Card
                onClick={() => props.handleCheck(x)}
                className={` rounded-3xl w-full my-3 min-h-20 p-2 
                ${props.answerStyle(x)}`}
              >
                <p>{x.answer}</p>
              </Card>
            </li>
          ))}
        </ul>

        <section className="flex justify-between items-center">
          {!props.actualQuestion.isSubmitted ? (
            <>
              <Button pill onClick={props.handleSubmit}>
                Envíame
              </Button>
            </>
          ) : (
            <Button
              pill
              color="pink"
              onClick={() => setExplainActive(!explainActive)}
              className="my-5 "
            >
              {!explainActive ? <>Explícame</> : <>Ocultame</>}
            </Button>
          )}
          <Pagination
            className="mb-2 p-0"
            layout="navigation"
            currentPage={props.questionNumber + 1}
            onPageChange={(page) => {
              setTimeout(() => {
                // setIsVisible(false);
                props.handleChangePage(page);
              }, 750);
              handleVisibility();
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
    </div>
  );
}

export default QuestionCard;
