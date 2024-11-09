import { features, join } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row  rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimWhite`}
    >
      <img src={icon} alt="star" className="w-[40%] h-[40%] object-contain" />
    </div>
    <div className="flex flex-col flex-1 mt-3 ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);
const Join = () => {
  return (
    <div>
    <section id="join" >
  <div className="mt-9 mb-9">
   
    <h2 className={`${styles.paragraph} max-w-[470px] mt-1`}>
    By investing with Lions, you will:
      </h2>

      <div className={` flex-col mt-2`}>
      {join.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>

      
  
  
  </div>

 
</section>
  </div>
  )
}

export default Join