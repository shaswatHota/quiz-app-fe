import './App.css';
import Dashboard from './components/Dashboard';'./components/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Questions from './components/Questions';
import Signup from './components/SignUp';
import Signin from './components/SignIn';
import Guidelines from './components/Guideline';
import Result from './components/Result';
import Profile from './components/Profile';
import Categories from './components/Categories';
import Leaderboard from './components/Leaderboard';
import Settings from './components/Settings'
import { useEffect, useState } from 'react';

function App() {
  
  const [user,setUser] = useState(null);

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      setUser({token});
    }

  },[])
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Router>
        <Routes>
          <Route path="/" element={user? <Navigate to='/dashboard' replace/>:<Navigate to='/signin' replace/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path='quiz/result/:quizId' element={<Result/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/guidelines" element={<Guidelines/>} />
          <Route path="/questions/:quizId" element={<Questions/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
