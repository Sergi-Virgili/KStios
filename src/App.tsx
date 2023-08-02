import "./App.css";
import Questions from "./components/Questions";

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
