import React from 'react'
function Button ({
    text="",
    className="",
    iconURL,
}){
return (
    <button className={`${className}, rounded-full px-7 py-3 text-lg text-white flex justify-center items-center bg-red-400 hover:bg-red-500 border-red-400 hover:border-red-500 gap-5 `}
   
    >
        {text}
        <img src={iconURL} alt="" className='w-5 h-5 '  />
    </button>
)
}
export default Button;
