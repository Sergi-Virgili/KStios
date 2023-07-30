interface Props {
  questionNumber: number;
  questionsTotal: number;
}

export default function QuestionCounter({
  questionNumber,
  questionsTotal,
}: Props) {
  return (
    <div>
      Pregunta {questionNumber} de {questionsTotal}
    </div>
  );
}
