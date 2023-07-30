import { useEffect } from "react";
import "./App.css";
import Questions from "./components/Questions";
import { fetchInitialQuestions } from "./services/QuestionServices";

function App() {
  // useEffect(() => {
  //   fetchInitialQuestions.then((data) => {
  //     console.log(data);
  //   });
  // }, []);

  return (
    <div className="app">
      <h1>KStios</h1>
      <p>A Simple Questions Quiz</p>
      <Questions />
    </div>
  );
}

export default App;
