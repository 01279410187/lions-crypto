import React, { useContext } from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";
import { LionContext } from "../context/LionsContext";
import Button from "./Button";
import styles from "../style";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const ExpiredNotice = () => {
  const {
    Invest,
    Account,
    profit,
    ClientInvest,
    balance,
    planPrecent,
    Reinvest,
    Withdraw,
  } = useContext(LionContext);
  return (
    <div>
      <div className="flex justify-between w-full">
        <div className="justify-start w-[60%]">
          <Button
            styles={`w-full text-[15.5px] mt-5  bg-[#2a913f] sm:text-[18px]`}
            title={"Reinvest"}
            onClick={Reinvest}
          />
        </div>
        <div className="justify-end">
          <div className="flex justify-end gap-1">
            <span
              className={`${styles.paragraph} text-[12px] sm:text-[20px]  font-bold mt-5`}
            >
              BNB
            </span>
            <input
              type="text"
              class="  w-[55%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base text-[11.5px] font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0    "
              placeholder="Reinvest Amount"
              value={profit}
              disabled
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="justify-start  w-[60%]">
          <Button
            styles={` w-full text-[15.5px] bg-[#2a913f] mt-5 sm:text-[18px]`}
            title={"Withdraw"}
            onClick={Withdraw}
          />
        </div>
        <div className="justify-end">
          <div className="flex justify-end gap-1">
            <span
              className={`${styles.paragraph} text-[12px] sm:text-[20px]  font-bold mt-5`}
            >
              BNB
            </span>
            <input
              type="text"
              class="  w-[55%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base text-[11.5px] font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0     "
              placeholder="withdraw Amount"
              value={profit}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  const {
    Invest,
    Account,
    profit,
    ClientInvest,
    balance,
    planPrecent,
    Reinvest,
    Withdraw,
  } = useContext(LionContext);
  const data={account:Account}
 
 
  return (
    <div className="show-counter">
      <h2
        className={`font-poppins font-normal   text-[18px] leading-[30.8px] text-[#2a913f]`}
      >
        Withdraw Or Reinvest Every 24 Hours
      </h2>
      <div className="countdown-link">
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </div>
    
    
       
      
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
