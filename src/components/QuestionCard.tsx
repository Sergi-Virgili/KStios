import { Button, Card } from "flowbite-react";
import Answer from "../domain/Answer";
import { Question } from "../domain/Question";
import Explanation from "./Explanation";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
interface Props {
  actualQuestion: Question;
  questionNumber: number;
  answerStyle: any;
  handleSubmit: () => void;
  handleCheck: (answer: Answer) => void;
  correctionMode: boolean;
}

function QuestionCard(props: Props) {
  const [explainActive, setExplainActive] = useState(false);
  useEffect(() => {
    setExplainActive(false);
  }, [props.actualQuestion]);
  // setExplainActive(false);
  function resultAvise() {
    if (!props.correctionMode) return "";
    return props.actualQuestion.isQuestionCorrect() ? <p>OK</p> : <p>FAILED</p>;
  }
  return (
    <article className="min-w-full">
      {resultAvise()}

      <p className=" text-gray-700 dark:text-gray-400 mb-5">
        {parse(props.actualQuestion.question)}{" "}
        {/* {props.actualQuestion.numberOfCorrectAnswers()} */}
      </p>
      <ul>
        {props.actualQuestion.answers.map((x: Answer, index: number) => (
          <li key={index}>
            <Card
              onClick={() => props.handleCheck(x)}
              className={` rounded-3xl w-full my-3 min-h-20 p-2 ${props.answerStyle(
                x
              )}`}
              // style={{
              //   backgroundColor: props.answerStyle(x),
              // }}
            >
              {/* <input
                type="checkbox"
                checked={x.isChecked}
                // onChange={() => props.handleCheck(x)}
                name="{index}"
                id={index.toString()}
              /> */}
              <p>{x.answer}</p>
            </Card>
          </li>
        ))}
      </ul>

      {!props.actualQuestion.isSubmitted ? (
        <Button onClick={props.handleSubmit} className="my-5 rounded-xl">
          Envíame
        </Button>
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
