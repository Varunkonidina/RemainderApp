import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Todo from "./Todo";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/tasks" element={<Todo />} />
    </Routes>
  );
}

export default App;
