import React, {createContext, useEffect, useState} from 'react';

import { ABI,contractAddress } from '../utils/Contract';

import { ethers } from 'ethers';
import { useParams } from 'react-router-dom';


export const LionContext = createContext();

const { ethereum } = window;

let provider = ethers.getDefaultProvider();


const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, ABI, signer);

 return transactionsContract;
};






export const LionsContextProvider = ({children}) => {
  const [Account, setAccount] = useState()
  const [profit, setProfit] = useState()
  const [balance, setBalance] = useState()
  const [amount, setAmount] = useState()
  const [depositCount, setDepositCount] = useState()
  const [Start, setStart] = useState()
  const [Finish, setFinish] = useState()
  const [Plan, setPlan] = useState()
  const [totalDeposite, setTotalDeposit] = useState()
  const [totalWitdraw, settotalWitdraw] = useState()
  const [TotalReferral, setTotalReferral] = useState()
  const [WithdrowTimer, setWithdrowTimer] = useState()
  
  const [planPrecent, setPlanPercent] = useState()
  const [ClientInvest, setClientInvest] = useState()
  const THREE_DAYS_IN_MS =  24*60*60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const { id } = useParams();

  let dateTimeAfterThreeDays
  
  const [referrer, setReferal] = useState(`${id}`)
  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setAmount(event.target.value);
  };

  const checkIfWalletConnected= async ()=>{

    try {
    if(!ethereum) return alert('Please install metamask')
   const accounts=await ethereum.request({method: 'eth_accounts'});
  
   if(accounts.length){
    setAccount(accounts[0]);
    let balance = await provider.getBalance(`${Account}`);
    setBalance(balance)
   }
   else{
    console.log('no Acount Found')
   }
   console.log(accounts)
    } catch (error) {
        console.log(error)
        throw new Error ('No etherum object')
    }

   
}

const getUserProfit=async()=>{
   try {
    const getProfitContract= createEthereumContract()
   let profit= await getProfitContract.getUserDividends(`${Account}`)
   profit=Number(profit._hex)/ (10 ** 18)
   setProfit(profit)
   console.log(profit)
   } catch (error) {
    console.log(error)
    throw new Error ('No profit are found object')
   }
}
const getUserInvestInfo=async()=>{
  try {

    const getProfitContract= createEthereumContract()
    let InvestInfo= await getProfitContract.getUserDepositInfo(`${Account}` , "0")
     setPlan(InvestInfo.plan)
     setPlanPercent(Number(InvestInfo.percent._hex))
     setClientInvest(parseInt(InvestInfo.amount._hex)/(10**18))
     setStart(new Date(InvestInfo.start.toNumber() * 1000).toLocaleString())
     setFinish(new Date(InvestInfo.finish.toNumber() * 1000).toLocaleString())
     console.log(Number(InvestInfo.percent._hex))
   
  } catch (error) {
    console.log(error)
    throw new Error ('No deposit Info Are Exist are found object')
    
  }

}

const Reinvest=async()=>{
  try {

    if(ethereum){
      const InvsteFunction= createEthereumContract()

      let profit= await InvsteFunction.getUserDividends(`${Account}`)
      await InvsteFunction.reinvest(`${id}`,2,{value : profit})
    }
  } catch (error) {
    console.log(error);
  
    throw new Error("No ethereum object");
  }
  
}

const Withdraw=async()=>{
  try {

    if(ethereum){
      const InvsteFunction= createEthereumContract()
      await InvsteFunction.withdraw()
      localStorage.setItem("withdraw", JSON.stringify(dateTimeAfterThreeDays));
      dateTimeAfterThreeDays = THREE_DAYS_IN_MS + NOW_IN_MS;
      setWithdrowTimer(dateTimeAfterThreeDays)


    }
  } catch (error) {
    console.log(error);
  
    throw new Error("No balance to withdraw ethereum object");
  }
  
}
const TotalDeposit=async()=>{
  try {
    if(ethereum){

      const gitTotalDeposit=createEthereumContract()
      let CountDeposit=await gitTotalDeposit.getUserAmountOfDeposits(`${Account}`)
      setDepositCount(CountDeposit)
    }
  } catch (error) {
    console.log(error);
    throw new Error("No balance to withdraw ethereum object");
  }

}

const UserInfo=async()=>{
  try {
    const getUser=createEthereumContract()
    let Info=await getUser.getUserInfo(`${Account}`)
    setTotalDeposit(parseInt(Info.totalDeposit._hex)/(10**18) )
    settotalWitdraw(parseInt(Info.totalWithdrawn._hex)/(10**18))
    setReferal(Info.totalReferrals)
    
  } catch (error) {
    console.log(error);
    throw new Error("No User Info ");
  }
}

useEffect(() => {
  checkIfWalletConnected()
  getUserProfit()
  getUserInvestInfo()
  TotalDeposit()
  UserInfo()
}, [Account])

  return (
   <LionContext.Provider value={{Account,profit,ClientInvest,balance,planPrecent,Reinvest,Withdraw,depositCount,Start,Finish,Plan,totalDeposite,totalWitdraw,referrer,WithdrowTimer}}>
      {children}
   </LionContext.Provider>
  )
}

export default LionsContextProvider
