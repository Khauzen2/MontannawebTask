import React from 'react'

const Button = ({ props, margingLeft="20px", className, buttonColor = "#fff" , color="black", padding="12px", width="", text="", border="" }) => {
  return (
    <div>
      <a href="">
        <button
        style={{backgroundColor:buttonColor, margingLeft:margingLeft, color:color, padding:padding, width:width, fontSize:text, border:border}}
          className={` ${className} pl-[9px] pr-[9px] pb-[10px] pt-[10px] rounded-[16px] items-center text-center border-[1px solid transparent] text-[#ffffff] font-[verdana]  cursor-pointer`}
        >
          {props}
        </button>
        </a>
    </div>
  );
};

export default Button