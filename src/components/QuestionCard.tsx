import Answer from "../domain/Answer";
import { Question } from "../domain/Question";

interface Props {
  actualQuestion: Question;
  questionNumber: number;
  answerStyle: any;
  handleSubmit: () => void;
  handleCheck: (answer: Answer) => void;
  correctionMode: boolean;
}

function QuestionCard(props: Props) {
  function resultAvise() {
    if (!props.correctionMode) return "";
    return props.actualQuestion.isQuestionCorrect() ? <p>OK</p> : <p>FAILED</p>;
  }
  return (
    <article className="card">
      {resultAvise()}
      <h2>Pregunta {props.questionNumber + 1}</h2>
      <p>
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
      <button onClick={props.handleSubmit}>Submit</button>
    </article>
  );
}

export default QuestionCard;
