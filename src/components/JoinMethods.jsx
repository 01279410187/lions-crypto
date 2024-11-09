import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);
const JoinMethods = () => {
  return (
    <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-gradient`}>HOW CAN I JOIN ?</h2>
      
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We have made this application very easy for everybody to start investing with some easy steps:
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With Lions Group, we have one Goal, and that is to give everyone the
        opportunity to fulfill his/her dreams without any risk or hassle, we
        believe the time is the most resource in life, therefore by using our
        method of arbitrage trading and our unique technology in the huge Crypto
        Market worldwide, we can make the highest profit every day, therefore,
        our Investors will achieve a high profit daily, we guarantee a profit of
        3% daily.
      </p>

      <Button styles={`mt-10`} title={"ConnectWallet"} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
  )
}

export default JoinMethods