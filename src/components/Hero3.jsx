import styles from "../style";
import { Blue, Blue2, Blue3, Blue4, discount, lionLogo, robot } from "../assets";
import GetStarted from "./GetStarted";
import { lion1, lion2, lion3 } from "../assets";
import Button from "./Button";

const Hero3 = () => {
  return (
    <div id="home" className=" text-align: center py-30 md:flex-row">
      
      <div className="flex justify-center">
      <img src={Blue3} alt="loins" className="w-[200px] h-[150px] rounded sm:h-[200px]  sm:hidden  justify-center mb-5 mt-2 mr-10 " />
        <img
          src={lion3}
          alt="hoobank"
          className="w-[200px] h-[100px]  hidden list-none sm:flex  sm:h-[200px] "
        />
        <img
          src={lion2}
          alt="hoobank"
          className="w-[200px] h-[100px]  hidden list-none sm:flex  sm:h-[200px] "
        />
        <img
          src={lion1}
          alt="hoobank"
          className="w-[200px] h-[100px]  hidden list-none sm:flex sm:h-[200px]  "
        />
      </div>

      <div className="flex justify-center py-5">
        <p
          className={`font-poppins font-normal text-[#2a913f] text-[30px] sm:text-[40px] sm:justify-center leading-[30.8px]  mt-5`}
        >
          WELCOME TO LIONS
        </p>
      </div>

      <div className="flex justify-center   ">
        <Button
          styles={`mt-7 sm:w-[60%] text-[20px] sm:text-[40px] mt-5 bg-[#2a913f] rounded-lg  text-center w-[87.5%]`}
          title={"Connect Wallet"}
        />
      </div>
      <div className="flex justify-center">
        {/* <Button styles={`mt-6 mb-6 justify-center w-[50%] `} title={"OUR Goals"}/> */}
      </div>
    </div>
  );
};

export default Hero3;



