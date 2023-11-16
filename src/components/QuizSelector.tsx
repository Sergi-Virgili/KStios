import { Button, Card } from "flowbite-react";
import { Iquiz } from "../App";

const QuizList: Iquiz[] = [
  {
    title: "Random Quiz (NEW)",
    file: "random",
  },
  {
    title: "AWS Cloud Practitioner 1",
    file: "./data/data.txt",
  },
  {
    title: "AWS Cloud Practitioner 2",
    file: "./data/data2.txt",
  },
  {
    title: "AWS Cloud Practitioner 3",
    file: "./data/data3.txt",
  },
  {
    title: "AWS Cloud Practitioner 4",
    file: "./data/data4.txt",
  },
  {
    title: "AWS Cloud Practitioner 5",
    file: "./data/data5.txt",
  },
  {
    title: "AWS Cloud Practitioner 6",
    file: "./data/data6.txt",
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
