import { Button, Card } from "flowbite-react";
import { Iquiz } from "../App";

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

export default function QuizSelector({ changeQuiz }: { changeQuiz: any }) {
  return (
    <main className="min-h-screen px-4 py-8 md:px-6 md:py-12">
      <section className="mb-8 rounded-[2rem] bg-gradient-to-br from-cyan-950 via-slate-900 to-pink-950 px-6 py-10 text-white shadow-2xl md:px-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
          Cloud certification trainer
        </p>
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
          <div>
            <h1 className="mb-4 text-4xl font-black tracking-tight md:text-6xl">
              KStios
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-200">
              Practice AWS and Azure certification questions, review corrections,
              and build exam confidence with focused quiz sessions.
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <dt className="text-2xl font-black">18</dt>
              <dd className="text-xs text-slate-300">quiz sets</dd>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <dt className="text-2xl font-black">2</dt>
              <dd className="text-xs text-slate-300">clouds</dd>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <dt className="text-2xl font-black">65</dt>
              <dd className="text-xs text-slate-300">random Qs</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="space-y-6">
        {quizGroups.map((group) => {
          const groupQuizzes = quizList.filter((quiz) =>
            group.types.includes(quiz.type)
          );

          return (
            <Card key={group.title} className="overflow-hidden border-0 shadow-lg">
              <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-black text-slate-900">
                    {group.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {group.description}
                  </p>
                </div>
                <span className="w-fit rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-900">
                  {groupQuizzes.length} {groupQuizzes.length === 1 ? "option" : "options"}
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {groupQuizzes.map((quiz) => (
                  <Button
                    key={quiz.title}
                    className="min-h-20 justify-start rounded-2xl bg-cyan-950 text-left text-gray-100 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-pink-700 hover:shadow-xl focus:ring-pink-300"
                    onClick={() => changeQuiz(quiz)}
                  >
                    <span className="block w-full">
                      <span className="block text-base font-bold">
                        {quiz.title}
                      </span>
                      <span className="mt-1 block text-xs font-medium text-cyan-100">
                        Start practice session
                      </span>
                    </span>
                  </Button>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
