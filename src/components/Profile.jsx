import { 
  IoArrowBack, 
  IoTrophy, 
  IoStatsChart, 
  IoGameController,
  IoFlash,
  IoPerson
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useEffect, useState } from 'react';

const Profile = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState();
  const [bestStreak,setBestStreak]=useState();
  const [totalScore,setTotalScore]= useState();
  const [gamesPlayed,setGamesPlayed] = useState();
  const [accuracy,setAccuracy]= useState();
  
  
  const handleBackToDashboard = () => {
    navigate('/dashboard')
  };
    useEffect(()=>{
    api.get('/me')
    .then((res)=>{
        setUser(res.data);
    })
    .catch(err => {
      console.error("Error in fething user data :- ", err);
    });
        
    },[])
    useEffect(()=>{

        api.get('/stats')
        .then((res)=>{
            const stats = res.data.stats;
            setAccuracy(stats.accuracy);
            setBestStreak(stats.bestStreak);
            setGamesPlayed(stats.gamesPlayed);
            setTotalScore(stats.totalScore);
        })
        .catch(err => {
            console.error("Error in fetching stats : ", err);
    });

    },[])
  

  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.15),transparent_50%)]"></div>
      </div>

      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center text-white hover:text-yellow-400 transition-colors duration-300 group hover:cursor-pointer"
          >
            <IoArrowBack className="w-5 h-5 mr-2 group-hover:translate-x-[-4px] transition-transform duration-300" />
            <span className="font-medium tracking-wide">BACK TO DASHBOARD</span>
          </button>
          
          <div className="flex items-center">
            <IoPerson className="w-8 h-8 text-yellow-400 mr-4" />
            <div className="flex items-center">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mr-6"></div>
              <h1 className="text-5xl font-bold text-white tracking-wide">YOUR PROFILE</h1>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent ml-6"></div>
            </div>
          </div>
          
          <div className="w-32"></div> 
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          
          <div className="lg:col-span-1">
            <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/30 shadow-2xl">
              
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full 
                              flex items-center justify-center text-4xl font-bold text-black mx-auto mb-6">
                  {user&&user.username?.charAt(0).toUpperCase()}
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">
                  {user&&user.username}
                </h2>
                
                <p className="text-gray-400 text-lg mb-6">
                  {user&&user.email}
                </p>
                
                <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
                              text-black font-bold py-3 px-8 rounded-2xl text-lg tracking-wide">
                  RANK NaN
                </div>
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              
              
              <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/30 shadow-2xl">
                <div className="text-center">
                  <IoTrophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">
                    {totalScore}
                  </div>
                  <div className="text-gray-400 text-lg font-medium tracking-wide">
                    TOTAL SCORE
                  </div>
                </div>
              </div>

              
              <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/30 shadow-2xl">
                <div className="text-center">
                  <IoStatsChart className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">
                    {accuracy}
                  </div>
                  <div className="text-gray-400 text-lg font-medium tracking-wide">
                    ACCURACY
                  </div>
                </div>
              </div>

              
              <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/30 shadow-2xl">
                <div className="text-center">
                  <IoGameController className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">
                    {gamesPlayed}
                  </div>
                  <div className="text-gray-400 text-lg font-medium tracking-wide">
                    GAMES PLAYED
                  </div>
                </div>
              </div>

              
              <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/30 shadow-2xl">
                <div className="text-center">
                  <IoFlash className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">
                    {bestStreak}
                  </div>
                  <div className="text-gray-400 text-lg font-medium tracking-wide">
                    BEST STREAK
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;