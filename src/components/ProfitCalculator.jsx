import { useState } from "react";
import styles, { layout } from "../style";
import Button from "./Button";

const ProfitCalculator = () => {
  const [amount, setAmount] = useState();
  const [day,setDay]=useState()
  const changeAmountInvest = (event) => {
    setAmount(event.target.value);
  };
  const changeAmountInvestDay = (event) => {
    setDay(event.target.value);
  };
  return (
    <section id="profit" className={layout.section}>
      <div className={`${layout.sectionInfo} p-3 rounded-[20px] feature-card`}>
        {/* <h2 className={`${styles.heading2} text-gradient`}>
          Profit Calculator
        </h2> */}
        <h2 className={`${styles.paragraph} `}>
          Calculate How much you can Earn with Lions{" "}
        </h2>

       
          <p className={`${styles.paragraph} max-w-[800px] font-bold text-[#2a913f] mt-5`}>
            Amount of Investment 
          </p>
          <p className={`${styles.paragraph} max-w-[800px] mt-1`}>
            {amount} BNB
          </p>
          <input
            type="range"
            onChange={changeAmountInvest}
            min={0}
            max={100}
            step={1}
            className="w-[100%] mt-2"
            value={amount}
          ></input>
       

        <h2 className={`${styles.heading2} text-[#2a913f] mt-1`}>Investment Period</h2>
        <p className={`${styles.paragraph}  mt-1`}>
            Days of Investment 
          </p>
          <p className={`${styles.paragraph} max-w-[800px] mt-1`}>
            {day} Days
          </p>
          <input
            type="range"
            onChange={changeAmountInvestDay}
            min={1}
            max={400}
            step={1}
            className="w-[100%] mt-2"
            value={day}
          ></input>

         
      </div>

      <div className={`${layout.sectionInfo} p-6 rounded-[20px] feature-card`}>
        <h2 className={`${styles.heading2} text-[#2a913f]`}>Profits</h2>

        <div className="flex justify-between gap-7">
          <p className={`${styles.paragraph} max-w-[800px] mt-1`}>
            Profit :
          </p>
          <p className={`${styles.paragraph} max-w-[800px] mt-2`}>{amount >=90 ? (amount*20)/1000 :amount>=45 && amount<90 ? (amount*10)/1000 : (amount*0.5)/1000}</p>
        </div>
        <div className="flex justify-between gap-7">
          <p className={`${styles.paragraph} max-w-[800px] mt-2`}>
            Period :
          </p>
          <p className={`${styles.paragraph} max-w-[800px] mt-2`}>{day}</p>
        </div>
        <div className="flex justify-between gap-7">
          <p className={`${styles.paragraph} max-w-[800px] text-[15px] mt-2`}>
            Profit percentage :
          </p>
          <p className={`${styles.paragraph} max-w-[800px] mt-2`}>{amount >=90 ? 2 :amount>=45 && amount<90 ? 1 : 0.5}</p>
        </div>
        <div className="flex justify-between gap-7">
          <p className={`${styles.paragraph} max-w-[800px] mt-5`}>
            Total balance :
          </p>
          <p className={`${styles.paragraph} max-w-[800px] mt-5`}>{(amount *10)/1000}</p>
        </div>

        
          <Button styles={`mt-10  w-[70%] bg-[#2a913f] text-[16px]`} title={"Reinvest"} />
        
      
      </div>
    </section>
  );
};

export default ProfitCalculator;
