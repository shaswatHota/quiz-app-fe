

function Button({from, to, via , icon, children, className ,...props}){

return(
<button className= {`bg-gradient-to-br ${from} ${via} ${to} w-90 h-48 rounded-3xl hover:brightness-120 hover:scale-105 transition-all duration-300 hover:cursor-pointer filter hover:shadow-yellow-400/25 hover:shadow-2xl
                         transform-gpu ${className}`} {...props}> 
     
    
        
            {children}
        
                  
</button>   
);
}
export default Button;