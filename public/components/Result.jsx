import React, { useState, useEffect } from 'react';
import { 
  IoTrophy, 
  IoStar, 
  IoFlash, 
  IoCheckmarkCircle,
  IoClose,
  IoTime,
  IoStatsChart
} from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import api from "../services/api";


const Result = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  let {quizId} = useParams();
  const [percentage,setPercentage] = useState(0);
  const [correct,setCorrect]=useState(0);
  const [wrong,setWrong]=useState(0);

  // Sample data - replace with actual quiz results
  const quizData = {
    correctAnswers: 14,
    totalQuestions: 15,
    score: 93,
    totalPoints: 67,
    avgDifficulty: 4.2,
    timeBonus: 15,
    category: 'Science & Technology'
  };

  const { correctAnswers, totalQuestions, score,  category } = quizData;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getPerformanceLevel = (percentage) => {
    if (percentage >= 90) return { level: 'EXCEPTIONAL!', color: 'text-yellow-400', message: 'Outstanding performance!' };
    if (percentage >= 80) return { level: 'EXCELLENT!', color: 'text-green-400', message: 'Great job!' };
    if (percentage >= 70) return { level: 'GOOD!', color: 'text-blue-400', message: 'Well done!' };
    if (percentage >= 60) return { level: 'FAIR', color: 'text-orange-400', message: 'Keep practicing!' };
    return { level: 'NEEDS IMPROVEMENT', color: 'text-red-400', message: 'Don\'t give up!' };
  };

  const performance = getPerformanceLevel(percentage);

  

  const handleReturnToDashboard = () => {
    console.log('Navigate to dashboard');
  };

  const handlePlayAgain = () => {
    console.log('Start new quiz');
  };


  api.get(`/quiz/result/${quizId}`)
    .then(res=>res.data)
    .catch(err=>console.error("fetch error : ", err));
    setCorrect(res.data.correct);
    setWrong(res.data.wrong);
    setPercentage((correct/(correct+wrong))*100)

   

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Results Card */}
      <div className={`relative z-10 max-w-2xl w-full transform transition-all duration-1000 ${
        animationComplete ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border border-yellow-400/30 shadow-2xl">
          
          {/* Score Display */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="text-8xl font-bold text-yellow-400 mb-2 tracking-tight">
                {correctAnswers}/{totalQuestions}
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
            
            <div className={`text-4xl font-bold ${performance.color} mt-8 mb-4 tracking-wide`}>
              {performance.level}
            </div>
            
            <div className="text-2xl text-white mb-2">
              You scored <span className="text-yellow-400 font-bold">{score}%</span>
            </div>
            
            <div className="text-lg text-yellow-400 font-medium">
              {performance.message}
            </div>
          </div>

          
          {/* Performance Breakdown */}
          <div className="bg-black/40 rounded-2xl p-6 mb-8 border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Performance Breakdown</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IoCheckmarkCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-gray-300">Correct</span>
                </div>
                <span className="text-green-400 font-bold">{correctAnswers}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IoClose className="w-5 h-5 text-red-400 mr-2" />
                  <span className="text-gray-300">Wrong</span>
                </div>
                <span className="text-red-400 font-bold">{totalQuestions - correctAnswers}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IoStar className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-gray-300">Category</span>
                </div>
                <span className="text-yellow-400 font-bold text-sm">{category}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IoTrophy className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-gray-300">Accuracy</span>
                </div>
                <span className="text-purple-400 font-bold">{score}%</span>
              </div>
            </div>
          </div>

          
          <div className="flex flex-col sm:flex-row gap-4">
            
            <button
              onClick={handleReturnToDashboard}
              className="flex-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
                       hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500
                       text-black font-bold py-4 px-8 rounded-2xl transition-all duration-300 
                       hover:scale-105 shadow-xl tracking-wide text-lg hover:drop-shadow-xl" 
            >
              RETURN TO DASHBOARD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;