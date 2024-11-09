import React from "react";

const Button = ({ styles ,title,onClick ,id}) => (
  <button type="button" className={`py-2.5 px-2.5  mb-2  font-poppins font-medium text-[25px] text-white  bg-[#211b58] rounded-lg  outline-none    ${styles}`} onClick={onClick} id={id}>
  {title}
  </button>
);

export default Button;



// py-2 px-4  font-poppins font-medium text-[14px] text-white bg-[#b3774a!important] rounded-[10px] outline-none