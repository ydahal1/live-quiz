import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizBoard from "./components/QuizBoard";
import Uscis from "./components/Uscis";
import "./App.css";

function App() {
  return (
    <Router basename="https://ydahal1.github.io/live-quiz/">
      <div className="App">
        <Routes>
          <Route exact path="/" element={<QuizBoard />} />
          <Route path="/uscis" element={<Uscis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
