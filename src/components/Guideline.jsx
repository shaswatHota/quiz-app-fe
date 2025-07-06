import React from 'react';
import { 
  IoArrowBack, 
  IoTime, 
  IoStar, 
  IoTrophy, 
  IoWarning, 
  IoCheckmarkCircle 
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Guidelines = () => {

    const navigate = useNavigate();
  const rules = [
    {
      icon: IoTime,
      title: 'Time Limit',
      description: 'Each question has a 30-second time limit. The timer will turn red in the last 5 seconds.',
      color: 'text-yellow-400',
    },
    {
      icon: IoCheckmarkCircle,
      title: 'Answer Selection',
      description: 'Click on your chosen answer. Once selected, you cannot change it.',
      color: 'text-yellow-400',
    },
    {
      icon: IoStar,
      title: 'Scoring System',
      description: 'Earn 1 point for each correct answer. No points are deducted for wrong answers.',
      color: 'text-yellow-400',
    },
    {
      icon: IoTrophy,
      title: 'Leaderboard',
      description: 'Your best scores are tracked and displayed on the leaderboard.',
      color: 'text-yellow-400',
    },
    {
      icon: IoWarning,
      title: 'Categories',
      description: 'Choose from various categories or play general knowledge quizzes.',
      color: 'text-yellow-400',
    },
  ];

  const tips = [
    'Read questions carefully before selecting an answer',
    'Don\'t rush - you have 30 seconds per question',
    'Practice regularly to improve your knowledge',
    'Try different categories to discover new topics',
    'Check the leaderboard to see how you rank',
  ];

  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.15),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center mb-12">
          <button
            onClick={()=>navigate('/dashboard')}
            className="flex items-center text-white hover:text-yellow-400 transition-colors duration-300 mr-8 group hover:cursor-pointer"
          >
            <IoArrowBack className="w-5 h-5 mr-2 group-hover:translate-x-[-4px] transition-transform duration-300" />
            <span className="font-medium tracking-wide">BACK TO DASHBOARD</span>
          </button>
          <div className="flex items-center">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mr-6"></div>
            <h1 className="text-5xl font-bold text-white tracking-wide">HOW TO PLAY</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent ml-6"></div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-10 border border-yellow-400/30 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <h2 className="text-3xl font-bold text-white mx-4 tracking-wide">GAME RULES</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
            <div className="grid gap-8">
              {rules.map((rule, index) => {
                const Icon = rule.icon;
                return (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="relative">
                      <Icon className={`w-10 h-10 ${rule.color} flex-shrink-0 mt-1`} />
                      <div className="absolute inset-0 w-10 h-10 bg-yellow-400/20 rounded-full blur-lg"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{rule.title}</h3>
                      <p className="text-gray-300 text-lg font-light leading-relaxed">{rule.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-10 border border-yellow-400/30 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <h2 className="text-3xl font-bold text-white mx-4 tracking-wide">PRO TIPS</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
            <div className="space-y-6">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full 
                                flex items-center justify-center text-sm font-bold text-black">
                    {index + 1}
                  </div>
                  <p className="text-gray-300 text-lg font-light">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400/10 via-yellow-500/10 to-yellow-600/10 backdrop-blur-xl 
                        rounded-3xl p-10 border border-yellow-400/30 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <h2 className="text-3xl font-bold text-white mx-4 tracking-wide">SCORING SYSTEM</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-black/40 rounded-2xl p-6 border border-green-400/30">
                <div className="text-4xl font-bold text-green-400 mb-3">+1</div>
                <div className="text-white font-bold text-lg mb-2 tracking-wide">CORRECT ANSWER</div>
                <div className="text-gray-400 text-sm tracking-wide">Within time limit</div>
              </div>
              <div className="bg-black/40 rounded-2xl p-6 border border-orange-400/30">
                <div className="text-4xl font-bold text-orange-400 mb-3">0</div>
                <div className="text-white font-bold text-lg mb-2 tracking-wide">WRONG ANSWER</div>
                <div className="text-gray-400 text-sm tracking-wide">No penalty</div>
              </div>
              <div className="bg-black/40 rounded-2xl p-6 border border-red-400/30">
                <div className="text-4xl font-bold text-red-400 mb-3">0</div>
                <div className="text-white font-bold text-lg mb-2 tracking-wide">TIME UP</div>
                <div className="text-gray-400 text-sm tracking-wide">No penalty</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={()=>navigate('/dashboard')}
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
                       hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500
                       text-black font-bold py-4 px-12 rounded-2xl transition-all duration-300 
                       hover:scale-105 shadow-xl tracking-wide text-lg hover:cursor-pointer"
            >
              READY TO PLAY!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;