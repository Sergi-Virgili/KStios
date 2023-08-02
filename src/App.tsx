import "./App.css";
import DefaultSidebar from "./components/DefaultSidebar";
import Questions from "./components/Questions";
import { Button, DarkThemeToggle } from "flowbite-react";
import { Flowbite, Card } from "flowbite-react";

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

        <h1>KStios</h1>
        <p>A Simple Questions Quiz</p>

        <Questions />
      </Flowbite>
    </div>
  );
}

export default App;
