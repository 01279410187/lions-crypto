import { ethers } from "ethers/lib";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import React, { useContext, useState, useEffect } from "react";

import { ABI, contractAddress } from "../utils/Contract";
import CountdownTimer from "./CountdownTimer";

import { LionContext } from "../context/LionsContext";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const { ethereum } = window;
let provider = ethers.getDefaultProvider();

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    ABI,
    signer
  );

  return transactionsContract;
};

const Investment = () => {
  const {
    Account,
    profit,
    ClientInvest,
    balance,
    planPrecent,
    Reinvest,
    Withdraw,
    depositCount,
    Start,
    Finish,
    totalDeposite,
    Plan,
    totalWitdraw,
    referrer
  } = useContext(LionContext);
  const { id } = useParams();
  const [Timer, setTimer] = useState();
  const THREE_DAYS_IN_MS = 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  let dateTimeAfterThreeDays;
  // const [referrer, setReferal] = useState(
  //   `${id}`
  // );
  const [amount, setAmount] = useState("");
  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setAmount(event.target.value);
  };
  const Invest = async () => {
    try {
      if (ethereum) {
        const InvsteFunction = createEthereumContract();
          if(amount >=90){
            const parsedAmount = ethers.utils.parseEther(`${amount}`);
        
            await InvsteFunction.Plan1(`${referrer}`, 0, { value: parsedAmount });

           dateTimeAfterThreeDays = THREE_DAYS_IN_MS + NOW_IN_MS;
          localStorage.setItem("Invest", JSON.stringify(dateTimeAfterThreeDays));
          setTimer(dateTimeAfterThreeDays);

          }
          else if(amount >=45 && amount <90){
            const parsedAmount = ethers.utils.parseEther(`${amount}`);
        
            await InvsteFunction.Plan1(`${referrer}`, 1, { value: parsedAmount });

           dateTimeAfterThreeDays = THREE_DAYS_IN_MS + NOW_IN_MS;
          localStorage.setItem("Invest", JSON.stringify(dateTimeAfterThreeDays));
          setTimer(dateTimeAfterThreeDays);

          }else if (amount >=1 && amount <45 ){

            const parsedAmount = ethers.utils.parseEther(`${amount}`);
        
            await InvsteFunction.Plan1(`${referrer}`, 2, { value: parsedAmount });

           dateTimeAfterThreeDays = THREE_DAYS_IN_MS + NOW_IN_MS;
          localStorage.setItem("Invest", JSON.stringify(dateTimeAfterThreeDays));
          setTimer(dateTimeAfterThreeDays);

          }else {
            throw new Error("Please choose write amount");


          }

        
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };
  //   const [Account, setAccount] = useState()
  //   const [profit, setProfit] = useState()
  //   const [balance, setBalance] = useState()

  //   const [planPrecent, setPlanPercent] = useState()
  //   const [ClientInvest, setClientInvest] = useState()
  //   const THREE_DAYS_IN_MS =   60 * 1000;
  //   const NOW_IN_MS = new Date().getTime();

  //   const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  //   const checkIfWalletConnected= async ()=>{

  //     try {
  //     if(!ethereum) return alert('Please install metamask')
  //    const accounts=await ethereum.request({method: 'eth_accounts'});

  //    if(accounts.length){
  //     setAccount(accounts[0]);
  //     let balance = await provider.getBalance(`${Account}`);
  //     setBalance(balance)
  //    }
  //    else{
  //     console.log('no Acount Found')
  //    }
  //    console.log(accounts)
  //     } catch (error) {
  //         console.log(error)
  //         throw new Error ('No etherum object')
  //     }

  // }

  // const getUserProfit=async()=>{
  //    try {
  //     const getProfitContract= createEthereumContract()
  //    let profit= await getProfitContract.getUserDividends(`${Account}`)
  //    profit=Number(profit._hex)/ (10 ** 18)
  //    setProfit(profit)
  //    console.log(profit)
  //    } catch (error) {
  //     console.log(error)
  //     throw new Error ('No profit are found object')
  //    }
  // }
  // const getUserInvestInfo=async()=>{
  //   try {

  //     const getProfitContract= createEthereumContract()
  //     let InvestInfo= await getProfitContract.getUserDepositInfo(`${Account}` , "0")

  //      setPlanPercent(Number(InvestInfo.percent._hex))
  //      setClientInvest(parseInt(InvestInfo.amount._hex)/(10**18))
  //      console.log(Number(InvestInfo.percent._hex))

  //   } catch (error) {
  //     console.log(error)
  //     throw new Error ('No deposit Info Are Exist are found object')

  //   }

  // }

  // const Reinvest=async()=>{
  //   try {

  //     if(ethereum){
  //       const InvsteFunction= createEthereumContract()

  //       let profit= await InvsteFunction.getUserDividends(`${Account}`)
  //       await InvsteFunction.reinvest("0x628D4430eC2DD0590Bc1431f5EBF84CF67d96486",0,{value : profit})
  //     }
  //   } catch (error) {
  //     console.log(error);

  //     throw new Error("No ethereum object");
  //   }

  // }

  // const Withdraw=async()=>{
  //   try {

  //     if(ethereum){
  //       const InvsteFunction= createEthereumContract()
  //       await InvsteFunction.withdraw()
  //     }
  //   } catch (error) {
  //     console.log(error);

  //     throw new Error("No balance to withdraw ethereum object");
  //   }

  // }

  // useEffect(() => {
  //   checkIfWalletConnected()
  //   getUserProfit()
  //   getUserInvestInfo()
  // }, [Account])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Invest"));
    const items1 = JSON.parse(localStorage.getItem("withdraw"));

    if (items) {
      setTimer(items);
    }
    else if(items1){
      setTimer(items1)
    }
  }, []);

  
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionInfo} p-3  rounded-[20px] `}>
        <h2
          className={`${styles.heading2} text-white text-[25px] sm:text-[40px] mt-5 bg-[#2a913f] rounded-lg  text-center`}
        >
          Investing
        </h2>
        <div className="flex justify-between w-full">
          <div className="justify-start">
            <div className="justify-start ">
              <p
                className={`font-poppins text-[12px] whitespace-nowrap text-black  sm:text-[20px]  mt-5 font-bold `}
              >
                Wallet Balance:
              </p>
            </div>
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
                class="  w-[50%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base text-[11.5px] font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0   "
                placeholder="Reinvest Amount"
                value={balance}
                disabled
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="justify-start">
            <p
              className={`${styles.paragraph} text-[12px] sm:text-[20px]  mt-5 font-bold `}
            >
              Your Investment:
            </p>
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
                class="  w-[50%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base text-[11.5px] font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0   "
                placeholder="Reinvest Amount"
                value={ClientInvest}
                disabled
              />
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center gap-1 sm:justify-between sm:gap-2">
          <p className={`${styles.paragraph} text-[13px] sm:text-[20px] font-bold mt-5`}>
            Your Investment :
          </p>
          <p className={`${styles.paragraph} text-[12px] sm:text-[20px] ml-5 font-bold mt-5`}>
            BNB
          </p>
          <input
            type="text"
            class="  w-[30%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="200"
            disabled
          />
        </div> */}

        {/* <div className="flex justify-between w-full">
          <div className="justify-start">
            <p
              className={`${styles.paragraph} text-[12px] sm:text-[20px]  mt-5 font-bold `}
            >
              Total Referral:
            </p>
          </div>
          <div className="justify-end">
            <div className="flex justify-end gap-1">
             
              <input
                type="text"
                class="  w-[50%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base text-[10px] font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0   "
                placeholder="Reinvest Amount"
                value={referrer}
                disabled
              />
            </div>
          </div>
        </div> */}

        <div className="flex justify-between w-full">
          <div className="justify-start">
            <p
              className={`${styles.paragraph} text-[11.5px] sm:text-[20px]  mt-5 font-bold `}
            >
              Rewards Percentage:
            </p>
          </div>
          <div className="justify-end">
            <div className="flex justify-end gap-1.5">
              <span
                className={`${styles.paragraph} text-[13px] sm:text-[20px]  font-bold mt-5`}
              >
                %
              </span>
              <input
                type="text"
                class="  w-[55%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base text-[11.5px] font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0   "
                placeholder="Precent"
                value={planPrecent / 10}
                disabled
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="justify-start">
            <p
              className={`${styles.paragraph} text-[10px] sm:text-[20px]  mt-5 font-bold `}
            >
              Plan Start Date:
            </p>
          </div>
          <div className="justify-end">
            <div className="flex justify-end gap-1.5">
              <p
                className={`${styles.paragraph} text-[10px] sm:text-[20px]  mt-5 font-bold `}
              >
                {Start}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="justify-start">
            <p
              className={`${styles.paragraph} text-[10px] sm:text-[20px]  mt-5 font-bold `}
            >
              Plan Finish Date:
            </p>
          </div>
          <div className="justify-end">
            <div className="flex justify-end gap-1.5">
              <p
                className={`${styles.paragraph} text-[10px] sm:text-[20px]  mt-5 font-bold `}
              >
                {Finish}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="justify-start">
            <p
              className={`${styles.paragraph} text-[12px] sm:text-[20px]  mt-5 font-bold `}
            >
              Plan Number:
            </p>
          </div>
          <div className="justify-end">
            <div className="flex justify-end ">
              <input
                type="text"
                class="  w-[50%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base text-[11.5px] font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0   "
                placeholder="Reinvest Amount"
                value={Plan}
                disabled
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="justify-start">
            <p
              className={`${styles.paragraph} text-[12px] sm:text-[20px]  mt-5 font-bold `}
            >
              Amount Of Investment:
            </p>
          </div>
          <div className="justify-end">
            <div className="flex justify-end ">
              <input
                type="text"
                class="  sm:w-full w-[60%] h-[40%] mt-5 mr-0 px-1.5 py-1.5 text-base text-[11.5px] sm:text-[10px] font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0   "
                placeholder=" Amount"
                id="amount"
                name="amount"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="justify-start">
            <p
              className={`${styles.paragraph} text-[12px] sm:text-[20px]  mt-5 font-bold `}
            >
              Total Deposit:
            </p>
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
                class="  w-[50%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base text-[11.5px] font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0   "
                placeholder="Reinvest Amount"
                value={totalDeposite}
                disabled
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="justify-start">
            <p
              className={`${styles.paragraph} text-[12px] sm:text-[20px]  mt-5 font-bold `}
            >
             Total Referral:
            </p>
          </div>
          <div className="justify-end">
            <div className="flex justify-end ">
              <input
                type="text"
                class="  w-[50%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base text-[11.5px] font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0   "
                placeholder="Reinvest Amount"
                value={referrer}
                disabled
              />
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center gap-1 sm:justify-between sm:gap-5">
          <p className={`${styles.paragraph} text-[14px] sm:text-[20px] font-bold mt-5`}>
            Daily Rewards :
          </p>
          <p className={`${styles.paragraph} text-[12px] sm:text-[20px] ml-7 font-bold mt-5`}>
            BNB
          </p>
          <input
            type="text"
            class=" w-[30%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="5"
            disabled
          />
        </div> */}
        {/* <div className="flex justify-center gap-1 sm:justify-between sm:gap-5 ">
          <p className={`${styles.paragraph} text-[13px] sm:text-[16px] font-bold mt-5`}>
            Rewards Percentage :
          </p>
          <p className={`${styles.paragraph} text-[12px] sm:text-[20px] ml-1 font-bold mt-5`}>
            %
          </p>
          <input
            type="text"
            class=" w-[30%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="5"
            disabled
          />
        </div> */}

        <Button
          styles={`w-full text-[15.5px] mt-5  bg-[#2a913f] sm:text-[18px]`}
          title={"Start Investing"}
          onClick={() => Invest(amount)}
        />
        <div>
          <h2
            className={`font-poppins font-normal   text-[18px] leading-[30.8px] text-[#2a913f]`}
          >
            Your Referral
          </h2>

          {/* <a
          href={`http://localhost:3000/${Account}`}
          className="text-[#2a913f] text-[18px]"
        >
          http://localhost:3000/{Account}
        </a> */}
          <Link to={`/ref/${Account}`} className="text-[#2a913f] text-[18px]">
            http://localhost:3000/{Account}
          </Link>

          <p>{id}</p>
        </div>
        {/* <input
          type="text"
          class="  w-[50%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base text-[11.5px] sm:text-[10px] font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0   "
          placeholder="Reinvest Amount"
          id="amount"
          name="amount"
          onChange={handleChange}
        /> */}

        {/* <div className="flex justify-between gap-5">
          <p className={`${styles.paragraph} max-w-[800px] mt-5`}>
          Daily Profit Through :
          </p>
          <p className={`${styles.paragraph}  bg-[#b3774a] rounded p-1 mt-5`}>11:45:23 PM</p>
        </div> */}
        {/* <div className="flex gap-2 sm:justify-between sm:gap-5">
          <p className={`${styles.paragraph} text-[15px] sm:text-[20px] font-bold mt-5`}>
            Amount :
          </p>
          <p className={`${styles.paragraph} text-[12px] ml-8 sm:text-[20px]  font-bold sm:ml-10 mt-5`}>
            BNB
          </p>
          <input
            type="text"
            class="  w-[30%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="1000"
            disabled
          />
        </div> */}
        {/* <div className="flex gap-1 sm:justify-around sm:gap-4">
          <p className={`${styles.paragraph} text-[12px] sm:text-[20px] font-bold mt-5`}>
            Your Rewards :
          </p>
          <p className={`${styles.paragraph} text-[12px] ml-3.5 sm:text-[20px] font-bold mt-5`}>
            BNB
          </p>
          <input
            type="text"
            class="  w-[30%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0  "
            placeholder="Reinvest Amount"
            value="2.45623 "
            disabled
          />
        </div> */}
      </div>

      <div className={`${layout.sectionInfo} p-3 rounded-[20px] `}>
        <h2
          className={`${styles.heading2}  text-white text-[30px] sm:text-[40px]  mt-5 sm:mt-14 bg-[#2a913f] rounded-lg  text-center`}
        >
          Rewards
        </h2>

        {/* <div className="flex justify-between gap-7">
          <p className={`${styles.paragraph} max-w-[800px] mt-5`}>
            Daily Rewards :
          </p>
          <p className={`${styles.paragraph} max-w-[800px] mt-5`}>5 BNB</p>
        </div> */}

        <div className="flex justify-between w-full">
          <div className="justify-start">
            <p
              className={`${styles.paragraph} text-[12px] sm:text-[20px]  mt-5 font-bold `}
            >
              Daily Profit Through:
            </p>
          </div>
          <div className="justify-end">
            <div className="flex justify-end gap-1">
              {/* <CountdownTimer targetDate={dateTimeAfterThreeDays} /> */}
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="justify-start">
            <p
              className={`${styles.paragraph} text-[12px] sm:text-[20px]  mt-5 font-bold `}
            >
              Your Rewards :
            </p>
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
                class="  w-[50%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base text-[11.5px] sm:text-[10px] font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0   "
                placeholder="Reinvest Amount"
                value={profit}
                disabled
              />
            </div>
          </div>
        </div>

        <p className={`${styles.paragraph}    mt-5`}>
          <span class="w-[15px] h-[15px] rounded-full inline-block bg-[#2a913f]"></span>{" "}
          To reinvest or withdraw Your profit, please specify The amount and
          press Reinvest or withdraw button Below
        </p>
        <p className={`${styles.paragraph}    mt-5`}>
          <span class="w-[15px] h-[15px] rounded-full inline-block bg-[#2a913f]"></span>{" "}
          The minimum amount for Reinvest or withdraw is 0.1 BNB
        </p>
        <p className={`${styles.paragraph}    mt-5`}>
          {" "}
          <span class="w-[15px] h-[15px] rounded-full inline-block bg-[#2a913f]"></span>{" "}
          The maximum amount for Reinvest or withdraw is Unlimited
        </p>

        <CountdownTimer targetDate={Timer} />
        {/* <div className="flex justify-between w-full">
          <div className="justify-start w-[60%]">
          <Button
            styles={`w-full text-[15.5px] mt-5  bg-[#2a913f] sm:text-[18px]`}
            title={"Reinvest"}
            onClick={Reinvest}
          />
          </div>
          <div className="justify-end">
            <div className="flex justify-end gap-1">
              <span className={`${styles.paragraph} text-[12px] sm:text-[20px]  font-bold mt-5`}>
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

        </div> */}
        {/* <div className="flex justify-center gap-1 sm:justify-between sm:gap-5 ">
          <Button
            styles={` w-[40%] text-[14px] mt-5 sm:text-[18px]`}
            title={"Reinvest"}
          />
          <p className={`${styles.paragraph} text-[12px] sm:text-[20px] font-bold mt-5`}>
            BNB
          </p>
          <input
            type="text"
            class="  w-[30%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0   "
            placeholder="Reinvest Amount"
            value="1000"

          />
        </div> */}
        {/* <div className="flex justify-between gap-5 mt-4">
         
          <input
            type="text"
            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border-[3px] border-solid border-[#2a913f]  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  "
            placeholder="Reinvest Amount"
          />
        </div> */}

        {/* <div className="flex justify-between w-full">
          <div className="justify-start  w-[60%]">
          <Button
            styles={` w-full text-[15.5px] bg-[#2a913f] mt-5 sm:text-[18px]`}
            title={"Withdraw"}
            onClick={Withdraw}
          />
          </div>
          <div className="justify-end">
            <div className="flex justify-end gap-1">
              <span className={`${styles.paragraph} text-[12px] sm:text-[20px]  font-bold mt-5`}>
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

        </div> */}

        {/* <div className="flex justify-center gap-1 sm:justify-between sm:gap-5 ">
          <Button
            styles={` w-[40%] text-[14px] mt-5 sm:text-[18px]`}
            title={"withdraw"}
          />
          <p className={`${styles.paragraph} text-[12px] sm:text-[20px] font-bold mt-5`}>
            BNB
          </p>
          <input
            type="text"
            class="  w-[30%] h-[30%] mt-5 mr-0 px-1.5 py-1.5 text-base font-normal text-black bg-white  bg-clip-padding  text-center border-[3px] border-solid border-[#2a913f#2a913f]  rounded transition ease-in-out m-0   "
            placeholder="withdraw"
            value="1000"

          />
        </div> */}

        <Button
          styles={`mt-5  bg-[#2a913f] text-[15px] w-full`}
          title={"Cancel Account & Leave Lions "}
        />
      </div>
    </section>
  );
};

export default Investment;
