import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Feature = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row  sm:p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[30px] h-[30px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[30%] h-[30%] object-contain" />
    </div>
    <div className="flex flex-col flex-1 ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Goal = () => (
  <section id="Goal" className={layout.section}>
    <div className={layout.sectionInfo}>
      {/* <h2 className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With Lions everything is POSSIBLE, Dream Comes True!
      </h2> */}
      <p className={`${styles.paragraph} `}>
       
        With Lions, anything is POSSIBLE, and dreams do come true! With Lions
        Group, we have one goal, and that is to give everyone the opportunity to
        fulfil their dreams without any risk or hassle. We believe that time is
        the most valuable resource in life, so by using our method of arbitrage
        trading and our unique technology in the Huge Crypto Market Worldwide,
        we can make the highest profit every day, ensuring that our clients
        achieve a daily profit of 2%.
      </p>

      <Button
        styles={`mt-10 sm:w-[40%] bg-[#2a913f] w-[60%] text-[15px]`}
        title={"Connect Wallet"}
      />
    </div>
    {/* feature*/}
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <Feature key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Goal;
