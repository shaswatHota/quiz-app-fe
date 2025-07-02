import './App.css';
import Dashboard from './components/Dashboard';'./components/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Questions from './components/Questions';

function App() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/questions" element={<Questions/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
