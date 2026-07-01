import { Button } from "flowbite-react";
import { Iquiz } from "../../App";

interface QuizButtonProps {
  quiz: Iquiz;
  onSelect: (quiz: Iquiz) => void;
}

const typeLabels: Record<string, string> = {
  random: "Mixed set",
  C01: "AWS CLF-C01",
  C02: "AWS CLF-C02",
  AZ: "Azure AZ-500",
};

export default function QuizButton({ quiz, onSelect }: QuizButtonProps) {
  return (
    <Button
      className="min-h-20 justify-start rounded-2xl bg-brand-950 text-left text-gray-100 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-interactive focus:ring-accent-500"
      onClick={() => onSelect(quiz)}
    >
      <span className="block w-full">
        <span className="mb-2 block w-fit rounded-full bg-white/10 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-brand-100">
          {typeLabels[quiz.type] || "Quiz"}
        </span>
        <span className="block text-base font-bold">{quiz.title}</span>
        <span className="mt-1 block text-xs font-medium text-brand-100">
          Start practice session
        </span>
      </span>
    </Button>
  );
}
