import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Referrals = () => {
  return (
    <section id="referrals">
      <div className={`mt-2 mb-2`}>
        {/* <h2 className={`${styles.heading2} text-gradient`}>Referrals</h2> */}
        <h2 className={`${styles.paragraph} text-[20px] mt-1 mb-1`}>
        By introducing your family members, friends or your partners to invest with LIONS, you will get an instant reward
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className=" p-1 sm:p-6 rounded-[20px]  feature-card ">
            <h2 className={`${styles.heading2} text-[#2a913f] text-center`}>Referrals Rewards</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
            Referral 3% Daily Rewards withdrawal
            </p>

            <p className={`${styles.paragraph} max-w-[470px] `}>
            Referral Bonus 3% of Client's investment "Minimum Client investment of BNB 5" <br/>Bonus Amount of BNB 0.15 wil make 100% profit of BNB 0.15 in 400 Days <br/> Withdrawal of BNB 0.00075 Daily<br/>Double your money in 400 Days
            </p>
           
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Referrals;
