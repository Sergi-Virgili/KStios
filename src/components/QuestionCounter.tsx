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
      <span className=" text-2xl">{questionNumber}</span> /{" "}
      <span className=" text-sm">{questionsTotal}</span>
    </div>
  );
}
