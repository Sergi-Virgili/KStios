import { Button } from "flowbite-react";
import Answer from "../domain/Answer";
import { Question } from "../domain/Question";
import Explanation from "./Explanation";
import { useState } from "react";

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
  function resultAvise() {
    if (!props.correctionMode) return "";
    return props.actualQuestion.isQuestionCorrect() ? <p>OK</p> : <p>FAILED</p>;
  }
  return (
    <article className="min-w-full">
      {resultAvise()}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>Pregunta {props.questionNumber + 1}</p>
      </h2>

      <p className="font-normal text-gray-700 dark:text-gray-400 my-5 max-h-50 w-100 min-w-1/1">
        {props.actualQuestion.question}{" "}
        {props.actualQuestion.numberOfCorrectAnswers()}
      </p>
      <ul>
        {props.actualQuestion.answers.map((x: Answer, index: number) => (
          <li
            key={index}
            style={{
              backgroundColor: props.answerStyle(x),
            }}
          >
            <input
              type="checkbox"
              checked={x.isChecked}
              onChange={() => props.handleCheck(x)}
              name="{index}"
              id={index.toString()}
            />
            {x.answer}
          </li>
        ))}
      </ul>
      {explainActive ? (
        <Explanation
          explanation={props.actualQuestion.explanation || ""}
          incorrect={props.actualQuestion.incorrect || ""}
          references={props.actualQuestion.references || ""}
        />
      ) : (
        ""
      )}
      {!props.actualQuestion.isSubmitted ? (
        <Button pill onClick={props.handleSubmit} className="my-5 ">
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
    </article>
  );
}

export default QuestionCard;
