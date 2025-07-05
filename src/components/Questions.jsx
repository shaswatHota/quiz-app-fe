import { FaRegClock } from "react-icons/fa6";
import Options from "./Options";
import { IoMdArrowBack } from "react-icons/io";
import api from "../services/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Questions(){

    const [category,setCategory] = useState();
    const [question,setQuestion] = useState();
    let {quizId} = useParams();
    const allCategories = ['art & literature', 'sports', 'science', 'entertainment', 'technology'];
    const [selectedOpt, setSelectedOpt] = useState(null);
    const [optLocked,setOptLocked] = useState(false);
    const [timer,setTimer] = useState(30);
    const [timesUp,setTimesUp]= useState(false);
    const navigate = useNavigate();


    useEffect(() => {
    api.get('/quiz/categories')
    .then(res=>setCategory(res.data))
    .catch(err => console.error("Fetch error:", err));
    }, [quizId]);

      useEffect(() => {
    let isMounted = true;

    api.get(`/quiz/${quizId}/next-question`)
      .then(res => {
        if (isMounted) setQuestion(res.data.question);
      })
      .catch(err => {
        if (isMounted) console.error("Fetch error:", err);
      });

        return () => { isMounted = false };
    }, [quizId]);
        
    
    function handleOptClick(option){
        if (optLocked) return;        
        setSelectedOpt(option);       
        setOptLocked(true);   

    }
    
     useEffect(() => {
    if (timer === 0) {
      setTimesUp(true);
      return; 
    }

    const clock = setInterval(() => {
      setTimer(c => c - 1);
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, [timer]);

  
function onBack(){
    navigate('/dashboard')
    quizId=null;
    
}


return(
<div className="p-6 text-white flex flex-col space-y-6" >
    <div className="flex justify-evenly text-sm md:text-md font-semibold ">
        <span >
            <button 
                className="hover:text-yellow-400 flex items-center flex-row space-x-3 hover:cursor-pointer group"
                onClick={onBack}
            >
            <div className="text-lg md:text-2xl transition-all duration-300 group-hover:-translate-x-1"> <IoMdArrowBack/></div>
            <div className="hidden md:block"> BACK TO DASHBOARD</div>
            </button>
        </span>
        <span>QUESTION 1 OF 20</span>
        <span>SCORE 0</span>

    </div>
    <div className="flex justify-center flex-col lg:flex-row space-x-12 p-6">
        <div className="flex flex-col space-y-6 ml-0 xl:ml-32">
            <div className="flex flex-col border border-yellow-400/20 bg-black/40 rounded-3xl p-7 md:p-12 space-y-3">
                <div className="flex justify-center mb-3 md:mb-6">
                    <FaRegClock className="text-4xl text-yellow-400  "/>
                </div>
                <div className="font-bold text-5xl md:text-6xl flex justify-center bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 to-yellow-600">
                      {timer}
                </div>
                <div className="font-semibold text-sm text-gray-400 flex justify-center mb-6">
                    {timesUp ? "TIME'S UP!" : "SECONDS REMAINING"}
                </div>
                <div className=" py-1.5 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 ">
                    {/* timer bar */}
                </div>
            </div>
            <div className="hidden lg:flex justify-center ">
                    <div className="flex text-xl font-semibold p-4 justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl w-3xs text-black hover:cursor-pointer">
                            NEXT QUESTION
                    </div>
            </div>
        </div>        

        <div className="flex flex-col space-y-6 border border-yellow-400/20 bg-black/40 rounded-3xl w-full p-10 mr-0 lg:mr-34" >
            <div className="text-sm font-semibold flex items-center">
                <div className="w-14 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mr-3 "></div>
                <div>
                {category?.categories && (
                    <div>
                        {Array.isArray(category.categories) &&
                        category.categories.length === allCategories.length &&
                        allCategories.every(cat => category.categories.includes(cat))
                        ? 'GENERAL'
                        : category.categories}
                    </div>
                    )}
                </div>
                <div className="w-14 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent ml-3 "></div>
            </div>
            {question?.question && (
                <div>
                    <div className="text-xl md:text-3xl font-bold mb-5">
                        <h1>{question.question}</h1>
                        
                    </div>
                    
            <div className=" flex flex-col">

                <ul>
                    {question.options.map((option, i) => (
                    <Options key={i} 
                        className={` flex flex-col mb-5 ${
                        option==selectedOpt
                            ? question.answer == selectedOpt
                            ? 'bg-gradient-to-br from-green-400 to-green-700 border border-green-500 scale-103' 
                            : option === selectedOpt
                            ? 'bg-gradient-to-br from-red-400 to-red-700 border border-red-500 scale-103'     
                            : 'filter brightness-75'                           
                            : ''
                        }
                    `}
                        onClick={()=>{handleOptClick(option)}}>{option}</Options>
                    ))}
                </ul>
                
                
            </div>
            </div>
        )}
            
        </div>
        

    </div>
    <div className="flex justify-center lg:hidden ">
         <div className="flex text-xl font-semibold p-4 justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl w-3xs text-black">
                            NEXT QUESTION
                    </div>
    </div>

    {timesUp&&(<div className="fixed inset-0 flex justify-center items-center bg-black/80 backdrop-blur-sm">

       <div className=" bg-gradient-to-br from-black via-gray-900 to-black border border-red-500/20 rounded-3xl p-8 md:p-12 shadow-xl text-white max-w-md w-full text-center ">
        

        <div className="relative flex justify-center mb-6">
          <FaRegClock className="text-5xl text-red-400 animate-pulse" />
          <div className="absolute inset-0 w-20 h-20 bg-red-400/20 rounded-full blur-xl mx-auto"></div>
        </div>

        
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">TIME'S UP!</h1>

        
        <p className="text-gray-400 mb-6">Don't worry, let's move on to the next challenge.</p>

        
        <button
          
          className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black font-semibold px-6 py-3 rounded-2xl hover:brightness-110 transition-all w-full"
        >
          NEXT QUESTION
        </button>
      </div>
    </div>)}
</div>
)
}
export default Questions;