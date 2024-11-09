import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const LionsWork = () => {
  return (
    <section id="lionsWorks">
      <div className={`mt-1 mb-2`}>
       
        
        <div className="flex flex-col justify-between md:flex-row">
          <div className=" p-2 sm:p-6 rounded-[20px]  feature-card ">
            <h2 className={`${styles.heading2}  text-[#2a913f] text-center`}>Step 1</h2>
            <p className={`${styles.paragraph} max-w-[470px] `}>
            The Client will provide LIONS with liquidity in crypto currency “BNB”
            </p>

            
           
          </div>
          <div className=" p-2 sm:p-6 rounded-[20px]  feature-card ">
            <h2 className={`${styles.heading2} text-[#2a913f] text-center`}>Step 2</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
            LIONS professional team will start arbitraging in the crypto market to make the highest possible profit using the latest Available Arbitrage Technologies
            </p>
           
          </div>
          <div className="p-2 sm:p-6 rounded-[20px]  feature-card ">
            <h2 className={`${styles.heading2} text-[#2a913f]  text-center`}>Step 3</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
            LIONS platform will automatically pay the Client between 0.5% to 2% depends on the plan the Client chose on daily basis, the Client can save, invest or withdraw the daily accrued funds            </p>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default LionsWork;
