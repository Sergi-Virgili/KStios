import { Iquiz } from "../App";
import Hero from "./ui/Hero";
import PageShell from "./ui/PageShell";
import QuizButton from "./ui/QuizButton";
import SectionCard from "./ui/SectionCard";

const quizList: Iquiz[] = [
  {
    title: "Random Quiz (NEW)",
    file: "random",
    type: "random",
  },
  {
    title: "AWS Cloud Practitioner 1",
    file: "./data/data.txt",
    type: "C01",
  },
  {
    title: "AWS Cloud Practitioner 2",
    file: "./data/data2.txt",
    type: "C01",
  },
  {
    title: "AWS Cloud Practitioner 3",
    file: "./data/data3.txt",
    type: "C01",
  },
  {
    title: "AWS Cloud Practitioner 4",
    file: "./data/data4.txt",
    type: "C01",
  },
  {
    title: "AWS Cloud Practitioner 5",
    file: "./data/data5.txt",
    type: "C01",
  },
  {
    title: "AWS Cloud Practitioner 6",
    file: "./data/data6.txt",
    type: "C01",
  },
  {
    title: "AWS Cloud Practitioner C02 - 1",
    file: "./data/C02/data1.txt",
    type: "C02",
  },
  {
    title: "AWS Cloud Practitioner C02 - 2",
    file: "./data/C02/data2.txt",
    type: "C02",
  },
  {
    title: "AWS Cloud Practitioner C02 - 3",
    file: "./data/C02/data3.txt",
    type: "C02",
  },
  {
    title: "AWS Cloud Practitioner C02 - 4",
    file: "./data/C02/data4.txt",
    type: "C02",
  },
  {
    title: "AWS Cloud Practitioner C02 - 5",
    file: "./data/C02/data5.txt",
    type: "C02",
  },
  {
    title: "AWS Cloud Practitioner C02 - 6",
    file: "./data/C02/data6.txt",
    type: "C02",
  },
  {
    title: "Azure AZ-500 - 1",
    file: "./data/azure/az500_01.json",
    type: "AZ",
  },
  {
    title: "Azure AZ-500 - 2",
    file: "./data/azure/Azure_AZ500_02.json",
    type: "AZ",
  },
  {
    title: "Azure AZ-500 - 3",
    file: "./data/azure/Azure_AZ500_03.json",
    type: "AZ",
  },
  {
    title: "Azure AZ-500 - 4",
    file: "./data/azure/Azure_AZ500_04.json",
    type: "AZ",
  },
  {
    title: "Azure AZ-500 - 5",
    file: "./data/azure/Azure_AZ500_05.json",
    type: "AZ",
  },
];

const quizGroups = [
  {
    title: "Mixed practice",
    description: "Start a randomized 65-question session from the AWS question bank.",
    types: ["random"],
  },
  {
    title: "AWS Cloud Practitioner",
    description: "Practice CLF-C01 and CLF-C02 style sets with explanations.",
    types: ["C01", "C02"],
  },
  {
    title: "Azure Security Engineer",
    description: "Review Azure AZ-500 security questions from JSON datasets.",
    types: ["AZ"],
  },
];

const cloudCount = new Set(
  quizList
    .filter((quiz) => quiz.type !== "random")
    .map((quiz) => (quiz.type === "AZ" ? "Azure" : "AWS"))
).size;

const randomQuestionCount = 65;

export default function QuizSelector({
  changeQuiz,
}: {
  changeQuiz: (quiz: Iquiz) => void;
}) {
  return (
    <PageShell>
      <Hero
        eyebrow="Cloud certification trainer"
        title="KStios"
        description="Practice AWS and Azure certification questions, review corrections, and build exam confidence with focused quiz sessions."
        stats={[
          { value: quizList.length, label: "quiz sets" },
          { value: cloudCount, label: "clouds" },
          { value: randomQuestionCount, label: "random Qs" },
        ]}
      />

      <div className="space-y-6">
        {quizGroups.map((group) => {
          const groupQuizzes = quizList.filter((quiz) =>
            group.types.includes(quiz.type)
          );

          return (
            <SectionCard
              key={group.title}
              title={group.title}
              description={group.description}
              meta={`${groupQuizzes.length} ${
                groupQuizzes.length === 1 ? "option" : "options"
              }`}
            >
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {groupQuizzes.map((quiz) => (
                  <QuizButton
                    key={quiz.title}
                    quiz={quiz}
                    onSelect={changeQuiz}
                  />
                ))}
              </div>
            </SectionCard>
          );
        })}
      </div>
    </PageShell>
  );
}
