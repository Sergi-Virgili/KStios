import "./App.css";
import { Flowbite } from "flowbite-react";
import Questions from "./components/Questions";
import QuizSelector from "./components/QuizSelector";

import { useState } from "react";

export interface Iquiz {
  title: string;
  file: string;
}

function App() {
  // useEffect(() => {
  //   fetchInitialQuestions.then((data) => {
  //     console.log(data);
  //   });
  // }, []);

  const [quiz, setQuiz] = useState({} as Iquiz);
  const changeQuiz = (quiz: Iquiz) => {
    setQuiz(quiz);
  };

  return (
    <div className="app">
      <Flowbite>
        {/* <DarkThemeToggle /> */}
        {/* <DefaultSidebar /> */}
        {/* <Navbar fluid rounded>
          <Navbar.Brand href="https://flowbite-react.com">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              QStios Quiz
            </span>
          </Navbar.Brand>

          <Stopwatch />
        </Navbar> */}
        {quiz.title ? (
          <header className="p-5 flex justify-end  bg-gray-100">
            <a
              onClick={() => changeQuiz({} as Iquiz)}
              className={
                "bg-none  text-pink-700 text-2xl font-thin hover:cursor-pointer hover:text-pink-400"
              }
            >
              Change Quiz
            </a>
          </header>
        ) : (
          <></>
        )}
        <main className="">
          {!quiz.file ? (
            <QuizSelector changeQuiz={changeQuiz} />
          ) : (
            <Questions quiz={quiz} />
          )}
        </main>
      </Flowbite>
    </div>
  );
}

export default App;
