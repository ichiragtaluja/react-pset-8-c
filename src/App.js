import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { Questions } from "./pages/Questions";
import { Answer } from "./pages/Answer";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/answer/:answerId" element={<Answer />} />
      </Routes>
    </div>
  );
}

export default App;
