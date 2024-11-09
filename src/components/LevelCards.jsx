import { quotes } from "../assets";

const LevelCards = ({ content, name, title, img ,value,profit}) => (
  <div className="flex flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-white">
     <h4 className="font-poppins font-semibold text-[20px] leading-[50px] test-center text-black">
          {name}
     </h4>
    {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
    <img src={img} alt={name} className="w-[200px] h-[200px] " />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10">
      {content}
    </p>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10">
      {profit}
    </p>

    <div className="flex justify-between">
     
      <div className="flex flex-col  ml-4">
       
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-black">
          {title}
        </p>
      </div>
      <div>
      <p className="font-poppins font-normal text-[16px] leading-[24px] text-black">
          {value}
        </p>

      </div>
    </div>
  </div>
);


export default LevelCards;
