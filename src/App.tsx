import "./App.css";
import { Card, Flowbite, Navbar } from "flowbite-react";
import Questions from "./components/Questions";
import Stopwatch from "./components/StoptWatch";
import QuizSelector from "./components/QuizSelector";

function App() {
  // useEffect(() => {
  //   fetchInitialQuestions.then((data) => {
  //     console.log(data);
  //   });
  // }, []);

  return (
    <div className="app">
      <Flowbite>
        {/* <DarkThemeToggle /> */}
        {/* <DefaultSidebar /> */}
        <Navbar fluid rounded>
          <Navbar.Brand href="https://flowbite-react.com">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              QStios Quiz
            </span>
          </Navbar.Brand>

          <Stopwatch />
        </Navbar>
        {/* <QuizSelector /> */}

        <Questions />
      </Flowbite>
    </div>
  );
}

export default App;
