import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Invest5 = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionInfo} p-3  rounded-[20px] `}>
        <h2
          className={`${styles.heading2} text-white text-[25px] sm:text-[40px] mt-5 bg-blue-gradient rounded-lg  text-center`}
        >
          Investment
        </h2>
        <div className="flex justify-between sm:mt-40 gap-1 sm:justify-around sm:gap-5 ">
          <p className={`${styles.paragraph} text-[15px] sm:text-[20px] mt-5 `}>
            Wallet Balance:
          </p>
          <input
            type="text"
            class="  w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0   "
            placeholder="Reinvest Amount"
            value="1000 BNB"
            disabled
          />
        </div>
        <div className="flex justify-between gap-1 sm:justify-around sm:gap-0">
          <p className={`${styles.paragraph} text-[15px] sm:text-[20px] mt-5`}>
            Your Investment :
          </p>
          <input
            type="text"
            class="  w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="200 BNB"
            disabled
          />
        </div>

        <div className="flex justify-between gap-1 sm:justify-around sm:gap-5">
          <p className={`${styles.paragraph} text-[15px] sm:text-[20px] mt-5`}>
            Daily Rewards :
          </p>
          <input
            type="text"
            class="  w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="5 BNB"
            disabled
          />
        </div>
        <div className="flex justify-between gap-1 sm:justify-around sm:gap-0 ">
          <p className={`${styles.paragraph} text-[13px] sm:text-[16px] mt-5`}>
            Rewards Percentage :
          </p>
          <input
            type="text"
            class=" w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="5%"
            disabled
          />
        </div>

        <h2
          className={`${styles.heading2} text-white text-[25px] sm:text-[40px] mt-5 bg-blue-gradient rounded-lg  text-center`}
        >
          Start Investment
        </h2>
        {/* <div className="flex justify-between gap-5">
          <p className={`${styles.paragraph} max-w-[800px] mt-5`}>
          Daily Profit Through :
          </p>
          <p className={`${styles.paragraph}  bg-[#b3774a] rounded p-1 mt-5`}>11:45:23 PM</p>
        </div> */}
        <div className="flex justify-between gap-10 sm:justify-around sm:gap-20">
          <p className={`${styles.paragraph} text-[15px] sm:text-[20px] mt-5`}>
            Amount :
          </p>
          <input
            type="text"
            class="  w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="1000 BNB"
            disabled
          />
        </div>
        <div className="flex justify-between gap-1 sm:justify-around sm:gap-6">
          <p className={`${styles.paragraph} text-[15px] sm:text-[20px] mt-5`}>
            Your Rewards :
          </p>
          <input
            type="text"
            class="  w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="2.45623 BNB"
            disabled
          />
        </div>
      </div>

      <div className={`${layout.sectionInfo} p-3 rounded-[20px] `}>
        <h2 className={`${styles.heading2}  text-white text-[30px] sm:text-[40px] mt-5 bg-blue-gradient rounded-lg  text-center`}>Rewards</h2>

        {/* <div className="flex justify-between gap-7">
          <p className={`${styles.paragraph} max-w-[800px] mt-5`}>
            Daily Rewards :
          </p>
          <p className={`${styles.paragraph} max-w-[800px] mt-5`}>5 BNB</p>
        </div> */}
        <div className="flex justify-between gap-1 sm:justify-around sm:gap-6">
          <p className={`${styles.paragraph} text-[13px] sm:text-[20px] mt-5`}>
            Daily Profit Through:
          </p>
          <input
            type="text"
            class="  w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0   "
            placeholder="Reinvest Amount"
            value="11:23:24 PM"
            disabled
          />
        </div>
        <div className="flex justify-between gap-1 sm:justify-around sm:gap-20">
          <p className={`${styles.paragraph} text-[15px] sm:text-[20px] mt-5`}>
            Your Rewards :
          </p>
          <input
            type="text"
            class="  w-[40%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#836826]  rounded transition ease-in-out m-0   "
            placeholder="Reinvest Amount"
            value="15 BNB"
            disabled
          />
        </div>

        <p className={`${styles.paragraph}    mt-5`}>
          To reinvest or withdraw Your profit, please specify The amount and
          press Reinvest or withdraw button Below
        </p>
        <p className={`${styles.paragraph}    mt-5`}>
          The minimum amount for Reinvest or withdraw is 0.1 BNB
        </p>
        <p className={`${styles.paragraph}    mt-5`}>
          {" "}
          The maximum amount for Reinvest or withdraw is Unlimited
        </p>

        <div className="flex justify-between gap-5 mt-4">
          <Button
            styles={` w-[40%] text-[14px] sm:text-[18px] bg-blue-gradient`}
            title={"Reinvest"}
          />
          <input
            type="text"
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  "
            placeholder="Reinvest Amount"
          />
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The minimum withdraw Amount is 0.10 BNB And Maximum amount is
          Unlimited
        </p>

        <div className="flex justify-between gap-5 mt-4">
          <Button
            styles={` w-[40%] text-[14px] sm:text-[18px] bg-blue-gradient`}
            title={"Withdraw"}
          />
          <input
            type="text"
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  "
            placeholder="Withdraw
            Amount"
          />
        </div>

        <Button
          styles={`mt-5  sm:w-[40%] text-[15px] bg-blue-gradient`}
          title={"Cancel Account"}
        />
      </div>
    </section>
  );
};

export default Invest5;
