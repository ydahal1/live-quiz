import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import QuizBoard from "./components/QuizBoard";
import Uscis from "./components/Uscis";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<QuizBoard />} />
          <Route path="/uscis" element={<Uscis />} />
          <Route path="*" element={<RedirectHandler />} />
        </Routes>
      </div>
    </Router>
  );
}

function RedirectHandler() {
  const location = useLocation();
  const redirectPath = new URLSearchParams(location.search).get("redirect");
  if (redirectPath) {
    window.history.replaceState(null, "", redirectPath);
  }
  return null;
}

export default App;
