import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const InvestmentPlan = () => {
  return (
    <section id="Invest">
      <div className={``}>
        {/* <h2 className={`${styles.heading2} text-gradient`}>Investment Plans</h2> */}
        <h2 className={`${styles.paragraph} text-[20px] mt-5 mb-1`}>
        We have 3 plans for investment, depends on the investment amount you intend to invest with us, the platform will automatically choose the right plan for you to earn the correct and highest profit.

        </h2>
        <div className="flex flex-col justify-between sm:p-6 md:flex-row ">
          <div className=" sm:p-6 rounded-[20px]  feature-card mb-3 ">
            <h2 className={`${styles.heading2}  text-[#2a913f] text-center `}>Plan 1</h2>
            <p className={`${styles.paragraph} max-w-[470px] `}>
              100% profit in 100 Days<br/> Daily Reward withdraw
            </p>

            <p className={`${styles.paragraph} max-w-[470px] `}>
            Minimum Investment Amount of BNB 90  will make 100% profit of 90 BNB in 100 Days
            withdrawal of BNB 1.8 Daily Double Your Money in 100 Days
            </p>
            <div className="text-center">
            {/* <Button styles={`mt-1 text-[15px] bg-[#2a913f] sm:w-[40%] w-[50%]`} title={"Invest Now"} /> */}

            </div>
          </div>
          <div className=" sm:p-6 rounded-[20px]  feature-card mb-3 ">
            <h2 className={`${styles.heading2} text-[#2a913f] text-center `}>Plan 2</h2>
            <p className={`${styles.paragraph} sm:max-w-[470px] `}>
              100% profit in 200 Days<br/> Daily Reward withdraw
            </p>
            <p className={`${styles.paragraph} sm:max-w-[470px] `}>
            Minimum Investment Amount of BNB 45  will make 100% profit of 45 BNB in 200 Days
            withdrawal of BNB 0.45 Daily Double Your Money in 200 Days
            </p>
            <div className="text-center">
            {/* <Button styles={`mt-1 text-[15px] bg-[#2a913f] sm:w-[40%] w-[50%]`} title={"Invest Now"} /> */}

            </div>
          </div>
          <div className=" sm:p-6 rounded-[20px]  feature-card ">
            <h2 className={`${styles.heading2} text-[#2a913f] text-center`}>Plan 3</h2>
            <p className={`${styles.paragraph} sm:max-w-[470px] `}>
              100% profit in 400 Days<br/> Daily Reward withdraw
            </p>
            <p className={`${styles.paragraph}   sm:max-w-[470px] `}>
            Minimum Investment Amount of BNB 1  will make 100% profit of 1 BNB In 400 Days
            withdrawal of BNB 0.005 Daily Double Your Money in 400 Days
            </p>
            <div className="text-center">
            {/* <Button styles={`mt-1 text-[15px] bg-[#2a913f] sm:w-[40%] w-[50%]`} title={"Invest Now"} /> */}

            </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlan;
