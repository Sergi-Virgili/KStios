import { Button, Card } from "flowbite-react";
import { Iquiz } from "../App";

const QuizList: Iquiz[] = [
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
];

export default function QuizSelector({ changeQuiz }: { changeQuiz: any }) {
  return (
    <main className=" transition-all flex justify-center min-h-screen p-0">
      <Card className="h-fit self-center">
        <div className="grid sm:w-full  md:grid-cols-3 gap-8 m-0 ">
          {QuizList.map((quiz, index) => (
            <>
              <Button
                key={quiz.title}
                className=" bg-cyan-900 text-gray-100 font-bold rounded-2xl h-20 md:h-40  "
                onClick={() => {
                  changeQuiz(QuizList[index]);
                }}
              >
                {quiz.title}
              </Button>
            </>
          ))}
        </div>
      </Card>
    </main>
  );
}
