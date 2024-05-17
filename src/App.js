import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SingUp";
import { AuthProvider } from "./context/AuthProvider";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Nav />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
