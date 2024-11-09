import styles, { layout } from "../style";
import { features } from "../constants";

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
    <div className="flex flex-col flex-1 ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const ArbitrageTrading = () => {
  return (
    <div>
      <section id="arbitrage" >
    <div className="mt-10 mb-10">
      {/* <h2 className={`${styles.heading2} text-gradient`}>Arbitrage Trading
      </h2> */}

      <div className={`feature-card rounded-md  flex flex-col flex-1  sm:p-6 `}>
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
      What is the Arbitrage?		

      </h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
      Arbitrage is a trading strategy that uses price differences between identical cryptocurrency in different Markets or different pairs 
      of cryptocurrencies in the same market To generate profits with relatively low risk.
      </p>
    </div>
    <div className={`feature-card   flex flex-col flex-1  sm:p-6 mt-5 `}>
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
      Overview of THE Arbitrage Market				
	

      </h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
      It’s estimated the volume of crypto arbitrage market to be around US$ 500,000,000,000, we, Lions are focusing on this huge market to make the maximum profit on Behalf of our Clients/Investors.
      </p>

      <p className="font-poppins font-normal text-black text-[16px] leading-[24px] mt-4">
      We have the professional and the expert team to trade and take the opportunity of the options in the largest crypto arbitrage market   in different Countries to build Wealth with crypto arbitrage.    </p>
      <p className="font-poppins font-normal text-blacke text-[16px] leading-[24px] mt-4">
      Start investing now with the leaders of the market and receive high profits on daily basis!
   </p>
   
    </div>
    
    
    </div>

   
  </section>
    </div>
  )
}

export default ArbitrageTrading