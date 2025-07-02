import { GoCircle } from "react-icons/go";


function Options({children,alphabet , className, ...props}){

return(
    
        <div className={`p-6 flex flex-row space-x-8 bg-black/60 border transition-all duration-300 hover:scale-102 border-yellow-400/20 hover:border-yellow-400/40 rounded-2xl ${className}`} {...props}>
            <GoCircle className="text-4xl">{alphabet}</GoCircle>
            <div>{children}</div>
        </div>
);
}
export default Options;