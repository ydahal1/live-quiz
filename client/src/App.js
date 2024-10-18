import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizBoard from "./components/QuizBoard";
import Uscis from "./components/Uscis";
import "./App.css";

function App() {
  return (
    <Router basename="/live-quiz">
      <div className="App">
        <Routes>
          <Route path="/" element={<QuizBoard />} />
          <Route path="/uscis" element={<Uscis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
