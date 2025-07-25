import { LuBrain } from "react-icons/lu";
import Button from "./Button";
import { VscDebugStart } from "react-icons/vsc";
import { FiBookOpen } from "react-icons/fi";
import { GoTrophy } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";


function Dashboard() {

  const [stats , setStats]=useState();
  const navigate = useNavigate();


useEffect(()=>{
  api.get("/stats")
  .then(res => setStats(res.data))
  .catch(err => console.error("Fetch error:", err));
  
},[])

  function startQuiz(){
    api.post("/quiz/start",{category: 'general'})
    .then(res=>{
      const quizId = res.data.quizId;
      console.log(quizId)
     navigate(`/questions/${quizId}`);
    })
    .catch(err => {
      console.error("Failed to start quiz:", err);
    });
  }


 function handleButtons(button){
  switch(button){
    case 'start-quiz' : 
      return startQuiz();   
    case 'categories' :
      return navigate('/categories');
    case 'leaderboard' :
      return navigate('/leaderboard');
    case 'guidelines' :
      return navigate('/guidelines');
    case 'profile' :
      return navigate('/profile');
    case 'settings' :
      return navigate('/settings');
    
  }
 }
  
  
  return (
    <div className="flex flex-col p-6">
      <header className='flex justify-center items-center pb-14'>
        <span className=' flex flex-col'>
          <div className='flex justify-center items-center'>
            <LuBrain className='text-6xl text-yellow-400 drop-shadow-2xl mr-5'/>

            <h1 className='text-7xl leading-[tight] font-bold bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl'>
              BigBrain
            </h1>
          </div>
            <div className='text-xl mt-8 text-white'>
              <p>
                Challenge your knowledge, compete with others, and become the ultimate
              </p>
              <p className='flex justify-center'>
                 quiz champion!
              </p>
              
            </div>
        </span>
      </header>
      <div className='flex flex-col grow justify-center items-center space-y-6 pb-8' >
          <div className='flex flex-wrap justify-center gap-6'>
            <Button from='from-yellow-400' via='via-yellow-500' to='to-yellow-600'className='text-white' onClick={()=>handleButtons('start-quiz')} >
                
                    <VscDebugStart className=" text-6xl  ml-4 drop-shadow-lg " />

                
                <div className="mb-5">
                    <div className="font-bold text-2xl"> Start Quiz </div><br /> <p>test your general knowledge </p>
                </div>
            </Button>
            <Button from='from-white' via='via-gray-50' to='to-white' className='text-black'  onClick={()=>handleButtons('categories')} >
                <div>
                    <FiBookOpen  className=" text-6xl  ml-4 drop-shadow-lg" />

                </div>
                <div className="mb-5">
                    <div className="font-bold text-2xl"> Categories </div><br /> <p>Choose your quiz topic </p>
                </div>
            </Button>
            <Button from='from-yellow-400' via='via-yellow-500' to='to-yellow-600' className='text-white'  onClick={()=>handleButtons('leaderboard')}>
                <div>
                    <GoTrophy className=" text-6xl  ml-4 drop-shadow-lg" />

                </div>
                <div className="mb-5">
                    <div className="font-bold text-2xl"> Leaderboard </div><br /> <p>See top performers </p>
                </div>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Button from='from-white' via='via-gray-50' to='to-white' className='text-black'  onClick={()=>handleButtons('guidelines')}>
                <div>
                    <IoDocumentTextOutline className=" text-6xl  ml-4 drop-shadow-lg"  />

                </div>
                <div className="mb-5">
                    <div className="font-bold text-2xl"> GuideLines </div><br /> <p>Learn how to play </p>
                </div>
            </Button>
            <Button from='from-yellow-400' via='via-yellow-500' to='to-yellow-600' className='text-white'  onClick={()=>handleButtons('profile')}>
                <div>
                    <RxPerson className=" text-6xl  ml-4 drop-shadow-lg" />

                </div>
                <div className="mb-5">
                    <div className="font-bold text-2xl"> Profile </div><br /> <p>View your stats </p>
                </div>
            </Button>
            <Button from='from-white' via='via-gray-50' to='to-white' className='text-black'  onClick={()=>handleButtons('settings')}>
                <div>
                    <IoSettingsOutline className=" text-6xl  ml-4 drop-shadow-lg" />

                </div>
                <div className="mb-5">
                    <div className="font-bold text-2xl"> Settings </div><br /> <p>Customize your experience</p>
                </div>
            </Button>
           
          </div>
      </div>
      <footer className=' flex justify-center items-center h-48'>
        <div className=' flex flex-col rounded-2xl h-40 w-md space-y-4 pt-5 bg-black/40 backdrop-blur-xl border border-yellow-400/20 shadow-2xl'>
            <div className='flex justify-center items-center text-xl text-white font-bold'>
                Quick Stats
            </div>
            <div className='flex justify-between'>
             {!stats ? (
                <div className="text-yellow-300 flex pl-4">Loading...</div>
              ) : (
                <div className='flex flex-col pl-8'>
                  <div className="text-yellow-400 text-2xl flex justify-center">
                    {stats.stats.totalScore}
                  </div>
                  <div className="text-gray-400 text-md font-semibold">
                    Total Score
                  </div>
                </div>
              )}
              {!stats ? (
                  <div className="text-yellow-300">Loading...</div>
                ) : (
                  <div className='flex flex-col pr-8'>
                    <div className="text-yellow-400 text-2xl flex justify-center">
                      {stats.stats.accuracy}
                    </div>
                    <div className="text-gray-400 text-md font-semibold">
                      Accuracy
                    </div>
                  </div>
                )}
              
              <div className='flex flex-col pr-8'>
                  <div className="text-yellow-400 text-2xl flex justify-center">
                    NaN
                  </div>
                  <div className="text-gray-400 text-md font-semibold">
                    Rank
                  </div>
              </div>
            </div>
        </div>
      </footer>

    </div>
  )
}

export default Dashboard;
