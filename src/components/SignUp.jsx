import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";
import { LuBrain } from "react-icons/lu";

const Signup = () => {
  const [username,setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await fetch('http://https://quiz-app-be-five.vercel.app/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username,email, password }),
      });
  
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message); 
        setLoading(false);
        navigate('/signin');
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      setLoading(false);
      setMessage(err.message);
    }  finally {
    setLoading(false); 
  }
  };
  

  return (
    <div className="h-screen w-screen flex justify-center flex-col items-center">
      <div className='flex justify-center items-center'>
                        <LuBrain className='text-8xl text-yellow-400 drop-shadow-2xl mr-5'/>
            
                        <h1 className='text-7xl leading-[tight] font-bold bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl'>
                          BigBrain
                        </h1>
                      </div>
      <div className="w-full max-w-sm mt-14 p-6 bg-white shadow-lg rounded-2xl bg-gradient-to-b from-black via-gray-800 to-black border border-yellow-400/40">
        <h2 className="text-center text-2xl text-white font-semibold mb-4 ">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="space-y-4 text-white">
            <input
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-2xl"
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-2xl"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-2xl"
            />
            <div
              type="submit"
              className="flex justify-center rounded-2xl hover:cursor-pointer w-full p-2 text-white bg-gradient-to-r from-[#FD6A5E] to-[#FF8A7A]"
              onClick={handleSignup}
            >
              {loading ? (
                <AiOutlineLoading  className="animate-spin text-white text-xl mr-2"/> 
              ) : (
                "Sign Up"
              )}
             
            </div>
            Already have an account?<Link className="text-yellow-400 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#7d73e1] after:transition-all after:duration-300" to="/signin">Login </Link>
          </div>
        </form>
        <p className="mt-4 text-center text-red-500">{message}</p>
      </div>
    </div>
  );
};

export default Signup;
