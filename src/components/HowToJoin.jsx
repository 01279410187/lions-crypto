import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const HowToJoin = () => {
  return (
    <section id="joinLions">
      <div className={``}>
        
        <h2 className={`${styles.paragraph} text-[20px] mt-1 mb-1`}>
          We have made this application very easy for everybody to start
          investing with some easy steps
        </h2>

        <div className="flex flex-col justify-between md:flex-row">
          <div className=" sm:p-6 p-1 rounded-[20px]  feature-card ">
            <h2 className={`${styles.heading2} text-[#2a913f] text-center`}>Step 1</h2>
            <p className={`${styles.paragraph} max-w-[470px] text-[16px] mt-1`}>
              Create an account on Binance or any other exchange platform and
              buy BNB
            </p>
          </div>
          <div className=" sm:p-6 p-1 rounded-[20px]  feature-card ">
          <h2 className={`${styles.heading2} text-[#2a913f] text-center`}>Step 2</h2>
            <p className={`${styles.paragraph} max-w-[470px] text-[16px] mt-1`}>
              Transfer the purchased BNBs to Trust Wallet or MetaMask Wallet
            </p>
          </div>
          <div className=" sm:p-6 p-1 rounded-[20px]  feature-card ">
            <h2 className={`${styles.heading2} text-[#2a913f] text-center`}>Step 3</h2>
            <p className={`${styles.paragraph} max-w-[470px] text-[16px] mt-1`}>
              <p className="text-[#2a913f] bold"></p>A- Open Trust Wallet/MetaMask Wallet and Open Browser on the
              lower tools bar, then
              <br />
              <p className="text-[#2a913f] bold"></p>B- In the search bar, enter<br/>
              <span className=" cursor-pointer text-[#2a913f]">
               <a href=" https://lionscrypto.com">
               https://lionscrypto.com
               </a>
              
              </span>
              <br />
              <p className="text-[#2a913f] bold"></p>C- Press Connect Wallet and follow Instruction given
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-1 md:flex-row">
          <div className=" sm:p-6 p-1 rounded-[20px]  feature-card ">
            <h2 className={`${styles.heading2} text-[#2a913f]  text-center`}>Step 4</h2>
            <p className={`${styles.paragraph} max-w-[470px] text-[16px] mt-1`}>
              Choose how much you want to invest with LIONS, minimum is BNB 1{" "}
            </p>
          </div>
          <div className=" sm:p-6 p-1 rounded-[20px] justify-start feature-card ">
            <h2 className={`${styles.heading2} text-[#2a913f] text-center`}>Step 5</h2>
            <p className={`${styles.paragraph} max-w-[470px] text-[16px] mt-1`}>
            The Clients can save, reinvest or withdraw the Accured money to their Trust Wallet / MetaMask Wallet instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
