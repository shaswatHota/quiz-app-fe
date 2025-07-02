import { FaRegClock } from "react-icons/fa6";
import Options from "./Options";
import { IoMdArrowBack } from "react-icons/io";

function Questions(){


return(
<div className="p-6 text-white flex flex-col space-y-6" >
    <div className="flex justify-evenly text-sm md:text-xl ">
        <span className="flex flex-row space-x-3">
            <div className="text-xl md:text-3xl"> <IoMdArrowBack/></div>
            <div className="hidden md:block"> BACK TO DASHBOARD</div>
        </span>
        <span>QUESTION 1 OF 20</span>
        <span>SCORE 0</span>

    </div>
    <div className="flex justify-center flex-col lg:flex-row space-x-12 p-6">
        <div className="flex flex-col space-y-6 ml-0 lg:ml-32">
            <div className="flex flex-col border border-yellow-400/20 bg-black/40 rounded-3xl p-12 space-y-3">
                <div className="flex justify-center mb-6">
                    <FaRegClock className="text-4xl text-yellow-400  "/>
                </div>
                <div className="font-bold text-6xl flex justify-center bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 to-yellow-600">
                    NA
                </div>
                <div className="font-semibold text-sm text-gray-400 flex justify-center mb-6">
                    SECONDS REMAINING
                </div>
                <div className=" py-1.5 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 ">
                    {/* timer bar */}
                </div>
            </div>
            <div className="hidden lg:flex justify-center ">
                    <div className="flex text-xl font-semibold p-4 justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl w-3xs text-black">
                            NEXT QUESTION
                    </div>
            </div>
        </div>

        <div className="flex flex-col space-y-6 border border-yellow-400/20 bg-black/40 rounded-3xl w-full p-10 mr-0 lg:mr-34" >
            <div className="text-sm font-semibold">
                CATEGORY
            </div>
            <div className="text-3xl font-bold">
                What is the speed of light in vacuum ?
            </div>
            <div className=" flex flex-col space-y-5">
                <Options> sldflkajsdlkfjsad</Options>
                <Options> lafkdljdafljdlfsa</Options>
                <Options> rilrjlrjkrljrlkr</Options>
                <Options> allkfjklllad</Options>
            </div>
            
        </div>
        

    </div>
    <div className="flex justify-center lg:hidden ">
         <div className="flex text-xl font-semibold p-4 justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl w-3xs text-black">
                            NEXT QUESTION
                    </div>
    </div>


</div>
)
}
export default Questions;