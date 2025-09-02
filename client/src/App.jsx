import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const isAuth = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuth ? <Home /> : <Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
