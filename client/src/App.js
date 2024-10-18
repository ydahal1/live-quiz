import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import QuizBoard from "./components/QuizBoard";
import Uscis from "./components/Uscis";
import "./App.css";

function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");
    if (redirect) {
      navigate(redirect);
    }
  }, [location, navigate]);

  return null;
}

function App() {
  return (
    <Router basename="/live-quiz">
      <div className="App">
        <RedirectHandler />
        <Routes>
          <Route path="/" element={<QuizBoard />} />
          <Route path="/uscis" element={<Uscis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
