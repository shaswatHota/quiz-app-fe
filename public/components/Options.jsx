import { GoCircle } from "react-icons/go";


function Options({children,alphabet , className, ...props}){

return(
    
        <li className={`p-6 flex flex-row space-x-8 bg-black/60 border transition-all duration-300 hover:scale-102 border-yellow-400/20 hover:border-yellow-400/40 rounded-2xl hover:cursor-pointer ${className}`} {...props}>
            <GoCircle className="text-4xl "></GoCircle>
            <div>{children}</div>
        </li>
);
}
export default Options;