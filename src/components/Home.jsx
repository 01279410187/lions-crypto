import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { data, features, questions } from "../constants";
import styles, { layout } from "../style";
import React, { useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Investment from "./Investment";

const Home = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  const FeatureCard = ({ title, info, index, id }) => (
    <section
      className={`flex flex-row sm:p-4  rounded-[20px]    ${
        index !== data.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
      id={id}
    >
      <div
        className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue `}
        onClick={() => toggle(index)}
        key={index}
      >
        {clicked === index ? (
          <AiOutlineMinus className="text-[#2a913f] text-[16px]" />
        ) : (
          <AiOutlinePlus className="text-[#2a913f] text-[16px]" />
        )}
      </div>
      <div className="flex flex-col flex-1 ml-3">
        <h4
          className="font-poppins font-semibold cursor-pointer text-[#2a913f] text-[20px] leading-[23.4px] mb-1"
          onClick={() => toggle(index)}
          key={index}
        >
          {title}
        </h4>
        <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
          {clicked === index ? (
            <div className="font-poppins font-normal text-black text-[16px] leading-[24px]">
              {info}
            </div>
          ) : null}
        </p>
      </div>
    </section>
  );
  return (
    <div>
      <div className="w-full overflow-hidden bg-white">
        <div className={`sm:px-5 px-6 ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={` bg-white`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={` bg-white ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>



          <Investment />
               

            <div className={` flex-col`}>
              {data.map((data, index) => (
                <FeatureCard
                  key={data.id}
                  {...data}
                  index={index}
                  id={data.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
