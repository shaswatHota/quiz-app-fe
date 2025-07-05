import './App.css';
import Dashboard from './components/Dashboard';'./components/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Questions from './components/Questions';
import Signup from './components/SignUp';
import Signin from './components/SignIn';
import Guidelines from './components/Guideline';

function App() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/guidelines" element={<Guidelines/>} />
          <Route path="/questions/:quizId" element={<Questions/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
