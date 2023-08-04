import "./App.css";
import { Flowbite } from "flowbite-react";
import Questions from "./components/Questions";
import Stopwatch from "./components/StoptWatch";

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
        <Stopwatch />
        <h1>KStios</h1>
        <p>A Simple Questions Quiz</p>

        <Questions />
      </Flowbite>
    </div>
  );
}

export default App;
