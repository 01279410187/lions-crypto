import { features, questions } from "../constants";
import styles, { layout } from "../style";
import Question from "./Accorfion";
import Button from "./Button";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Accordion from "./Accorfion";
import { useState } from "react";


const FAQ = () => {
  const [data, setData] = useState(questions);
  const [expanded, setExpanded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  const FeatureCard = ({ title, info, index }) => (
    <div
      className={`flex flex-row  rounded-[20px]    ${index !== questions.length - 1 ? "mb-6" : "mb-0"
        } `}
    >
      <div
        className={`w-[25px] h-[25px] rounded-full ${styles.flexCenter} bg-dimBlue `}
        onClick={() => toggle(index)} key={index}
      >
        {clicked === index ? <AiOutlineMinus className="text-[#2a913f] text-[12px]" /> : <AiOutlinePlus className="text-[#2a913f] text-[12px]"/>}
      </div>
      <div className="flex flex-col flex-1 ml-3">
        <h4
          className="font-poppins  text-black text-[15px] leading-[23.4px] mb-1"
          onClick={() => setExpanded(!expanded)}
        >
          {title}
        </h4>
        <p className="font-poppins font-normal text-black  text-[16px] leading-[24px]">
          {clicked === index ? (
            <div className="font-poppins font-normal text-black  text-[16px] leading-[24px]" >
              <p>{info}</p>
            </div>
          ) : null}
        </p>
      </div>
    </div>
  );
  return (

    <section id="faq">
      <div className="mt-5 mb-10">
        {/* <h2 className={`${styles.heading2} text-gradient`}>FAQ</h2> */}

        <div className={` `}>
          {questions.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
        <div className={`${styles.paragraph} mt-3`}>

          If you have more questions, please send us an email on <br/>
         Email:<span className="text-[#2a913f] text-[20px] cursor-pointer">Support@LionsCrypt.com</span> 
        </div>
      </div>
      
    </section>

  );
};

export default FAQ;
